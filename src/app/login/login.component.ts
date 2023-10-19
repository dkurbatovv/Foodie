import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegistration = false;
  showLogin = true;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleRegistration() {
    this.router.navigate(['/register']);
  }
  

  log(username: string, password: string) {
    
    this.authService.login(username, password).subscribe(
      (response: any) => {
        if (response && response.access_token) {
          this.authService.setAccessToken(response.access_token);
          this.authService.setUserInfo(response); 
          console.log('Аутентификация успешна', response);
          console.log(this.authService.userRole);
          // Перенаправление на главную страницу
          this.router.navigate(['']);
        } else {
          // Ошибка входа, надо обработать позже
        }
      },
      (error) => {
        console.error('Произошла ошибка при аутентификации', error);

      }
    );
    
  }
}
