import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accessToken: string | null = null;
  users: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.accessToken = this.authService.getAccessToken(); 

    if (this.accessToken) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      });
      this.http.get('https://ea-backend.wckz.space/users', { headers }).subscribe((data: any) => {
        this.users = data;
      });
    }
  }
}
