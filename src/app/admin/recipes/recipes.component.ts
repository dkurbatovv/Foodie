import { Component, OnInit } from '@angular/core';
import { RecipesAdminService } from './recipes-admin.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: any[] = [];
  recipeToDeleteId: number | null = null;
  accessToken: string | null = null;

  constructor(private recipeService: RecipesAdminService, private authService: AuthService) {}

  ngOnInit() {
    this.accessToken = this.authService.getAccessToken();
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  modalOpen = false;

  openModal(recipeId: number): void {
    this.recipeToDeleteId = recipeId;
    this.modalOpen = true;
  }
  
  closeModal() {
    this.modalOpen = false;
  }

}
