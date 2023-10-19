import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  username: string | null = null; 
  status: string | null = null;
  showDropdown: boolean = false;


  
  userIsLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token; 
  }

  getUserInfo() {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : { username: 'Гость', role: 'Посетитель' };
  }

  onLogin(username: string) {
    this.username = username;
    this.status = 'Пользователь';
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  exit() {
    this.authService.logout();
  }

  

  
}
