import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://ea-backend.wckz.space/users';
  private accessToken: string | null = null; // Добавляем поле accessToken для хранения токена доступа
  private userInfo: any = null; // Поле для хранения информации о пользователе
  isAuthenticated: boolean = false;
  userRole: string = ''; 

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.userRole = localStorage.getItem('userRole') || '';
  }

  // Регистрация пользователя
  register(email: string, password: string) {
    const registerUrl = `${this.baseUrl}/register`;
  
    // Убедитесь, что отправляете данные в формате JSON
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    // Отправка запроса на сервер для регистрации
    return this.http.post(registerUrl, body, { headers })
      .pipe(
        tap(() => {
          // После успешной регистрации установите isAuthenticated в true и userRole, если это применимо
          this.isAuthenticated = true;
          this.userRole = 'user'; // Установите роль пользователя
        })
      );
  }

  // Авторизация пользователя
  login(username: string, password: string) {
    const loginUrl = `${this.baseUrl}/login`;
    
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post(loginUrl, body, { headers })
      .pipe(
        tap((response: any) => {
          this.isAuthenticated = true;
          this.userRole = response.role === 'admin' ? 'admin' : 'user'; 
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', this.userRole); 
          console.log(this.isAuthenticated);
          console.log(this.userRole);
        })
      );
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', token);
  }

  

  getAccessToken(): string | null {
    if (this.accessToken) {
      return this.accessToken;
    }
    return localStorage.getItem('access_token');
  }

  setUserInfo(userInfo: any) {
    this.userInfo = userInfo;
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  }

  getUserInfo(): any {
    if (this.userInfo) {
      return this.userInfo;
    }
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : { username: 'Гость', role: 'Посетитель' };
  }

  getUserStatus(): Observable<string> {
    const userInfo = this.getUserInfo();
    if (userInfo && userInfo.role) {
      return of(userInfo.role);
    } else {
      return of('guest');
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.setItem('isAuthenticated', 'false'); 
    localStorage.setItem('userRole', '');
    console.log('Метод работает');

    this.isAuthenticated = false;
          this.userRole = '';
    this.router.navigate(['']);
  }
  
}
