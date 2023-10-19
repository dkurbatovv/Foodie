import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { GetRecipeService } from './get-recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

import { RegistrationComponent } from './registration/registration.component';

import { AuthService } from './auth.service';
import { UserGuard } from './user.guard';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { RecipesComponent } from './admin/recipes/recipes.component';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'recipe',
    component: AllRecipesComponent
  },
  { 
    path: 'recipe/:id', 
    component: RecipeDetailComponent,
  },
  {
    path: 'create-recipe',
    component: NewRecipeComponent,
    canActivate: [UserGuard]
  }, 
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'recipes', component: RecipesComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/error',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [GetRecipeService, AuthService]
})
export class AppRoutingModule { }
