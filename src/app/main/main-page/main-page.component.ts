import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRecipeService } from '../../get-recipe.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: GetRecipeService,
    private meta: Meta
  ) {
    this.meta.addTag({ property: 'og:title', content: 'Foodie: Главная' });
    this.meta.addTag({ property: 'og:description', content: 'Сборник кулинарных рецептов, для всей семьи' });
  }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
