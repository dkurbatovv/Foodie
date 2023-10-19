import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://ea-backend.wckz.space/posts';

  constructor(private http: HttpClient) {}

 
  getRecipeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  private apiUrl = 'https://ea-backend.wckz.space/posts';

  getAllRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
