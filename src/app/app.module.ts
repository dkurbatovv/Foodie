import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { DateFormatPipe } from './date-format.pipe';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { BestRecipeComponent } from './main/best-recipe/best-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { TryRecipeComponent } from './main/try-recipe/try-recipe.component';
import { NewsComponent } from './main/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SliderComponent } from './main/slider/slider.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { RecipesComponent } from './admin/recipes/recipes.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorPageComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    DateFormatPipe,
    WhyUsComponent,
    BestRecipeComponent,
    NewRecipeComponent,
    TryRecipeComponent,
    NewsComponent,
    RecipeDetailComponent,
    AllRecipesComponent,
    SliderComponent,
    NoAccessComponent,
    AdminComponent,
    UsersComponent,
    RecipesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
