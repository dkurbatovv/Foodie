import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {
  private apiUrl = 'https://ea-backend.wckz.space/posts'; 

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRecipe(id: number): Observable<any> {
    const url = `${this.apiUrl}/${2}`;
    return this.http.get(url);
  }
}
