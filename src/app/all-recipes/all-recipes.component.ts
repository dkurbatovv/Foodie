import { Component } from '@angular/core';
import { AllRecipesService } from './all-recipes.service';
import { Meta } from '@angular/platform-browser';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent {
  recipes: any[] = [];

  constructor(private allRecipesService: AllRecipesService, private meta: Meta, private authService: AuthService) {
    this.meta.addTag({ property: 'og:title', content: 'Foodie: Каталог рецептов' });
    this.meta.addTag({ property: 'og:description', content: 'Все самые лучшие рецепты собраны здесь' });
  }
  
  ngOnInit(): void {
    this.loadRecipes();
    console.log(this.authService.userRole);
    console.log(this.authService.isAuthenticated);
  }

  loadRecipes() {
    this.allRecipesService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

}
