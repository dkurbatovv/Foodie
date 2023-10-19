import { Component } from '@angular/core';
import { BestRecipesService } from './best-recipes.service';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent {
  recipes: any[] = [];
  newRecipes: any[] = [];
  showLoadMoreButton = true;
  loadedRecipeCount = 3;
  randomRecipes: any[] = [];

  constructor(private recipeService: BestRecipesService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getAllRecipes().subscribe((recipes) => {
      this.shuffleArray(recipes); 
      this.recipes = recipes.slice(0, 12);
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  loadMoreRecipes() {
    const newRandomRecipes = this.loadRandomRecipes(3); // Загружаем 3 новых рецепта
    this.randomRecipes = [...this.randomRecipes, ...newRandomRecipes];
    this.showLoadMoreButton = false; // Скрываем кнопку, чтобы избежать повторных запросов
  }
  
  loadRandomRecipes(count: number) {
    const randomIndices = this.getRandomIndices(count, this.recipes.length);
    return randomIndices.map((index) => this.recipes[index]);
  }

  getRandomIndices(count: number, maxIndex: number): number[] {
    const indices: number[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
}
