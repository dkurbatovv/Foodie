import { Component } from '@angular/core';
import { GetRecipeService } from 'src/app/get-recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  recipes: any[] = [];
  currentIndex: number = 0;
  currentRecipe: any;

  constructor(private route: ActivatedRoute, private recipeService: GetRecipeService) {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.currentRecipe = this.recipes[this.currentIndex];
    });
  }

  recipe: any;

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  prevRecipe() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentRecipe = this.recipes[this.currentIndex];
    }
  }

  nextRecipe() {
    if (this.currentIndex < this.recipes.length - 1) {
      this.currentIndex++;
      this.currentRecipe = this.recipes[this.currentIndex];
    }
  }
}
