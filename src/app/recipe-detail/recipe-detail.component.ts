import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit  {
  recipe: any; 

  steps: any[] = Array(5).fill(0); 
  anotherSteps: any[] = Array(3).fill(0); 
  isTextStriked: boolean[] = new Array(this.steps.length).fill(false);
  anotherTextStriked: boolean[] = new Array(this.steps.length).fill(false);

  recipesAnother: any[] = [];
  loadedRecipeCount = 3;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private meta: Meta ) {

  }

  ngOnInit(): void {
    
    const recipeId = this.route.snapshot.params['id'];
    
    this.recipeService.getRecipeById(recipeId).subscribe((recipe: any) => {
      this.recipe = recipe;
      
      this.meta.addTag({ property: 'og:title', content: this.recipe.title });
      this.meta.addTag({ property: 'og:description', content: this.recipe.body });
      this.meta.addTag({ property: 'og:description', content: this.recipe.image });
    });

    this.loadRecipes();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const recipeId = +id;

        this.loadRecipe(recipeId);
      } else {
        
      }
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  loadRecipes() {
    this.recipeService.getAllRecipes().subscribe((recipes) => {
      this.shuffleArray(recipes); 
      this.recipesAnother = recipes.slice(0, this.loadedRecipeCount); 
    });
  }
  

  loadRecipe(id: number): void {
    this.recipeService.getRecipeById(id).subscribe(data => {
      this.recipe = data; 
    });
  }

  printPage() {
    window.print();
  }

  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
  
  
}
