import { Component } from '@angular/core';
import { BestRecipesService } from '../best-recipe/best-recipes.service';

@Component({
  selector: 'app-try-recipe',
  templateUrl: './try-recipe.component.html',
  styleUrls: ['./try-recipe.component.css']
})
export class TryRecipeComponent {
  recipes: any[] = [];
  newRecipes: any[] = [];
  showLoadMoreButton = true;
  loadedRecipeCount = 4;
  randomRecipes: any[] = [];

  constructor(private recipeService: BestRecipesService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getAllRecipes().subscribe((recipes) => {
      this.shuffleArray(recipes); // Перемешать массив рецептов
      this.recipes = recipes.slice(0, 12); // Выбрать первые три случайных рецепта
    });
  }

  loadMoreRecipes() {
    const newRandomRecipes = this.loadRandomRecipes(12); // Загружаем 3 новых рецепта
    this.randomRecipes = [...this.randomRecipes, ...newRandomRecipes];
    this.showLoadMoreButton = false; // Скрываем кнопку, чтобы избежать повторных запросов
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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
