import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesAdminService {
  private apiUrl = 'https://ea-backend.wckz.space/posts';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    const url = `${this.apiUrl}/${recipeId}`;
    return this.http.delete<void>(url);
  }
}
