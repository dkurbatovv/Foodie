import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showUsers: boolean = false;
  showRecipes: boolean = false;

  isUsersActive = false;
  isRecipesActive = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.isUsersActive = segments.some(segment => segment.path === 'users');
      this.isRecipesActive = segments.some(segment => segment.path === 'recipes');
    });
  }
}  
