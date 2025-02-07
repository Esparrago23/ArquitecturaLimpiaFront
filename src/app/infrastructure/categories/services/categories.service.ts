import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../../domain/categories/categorie';
import { ICategorie } from '../../../domain/categories/icategorie';
import { environment } from '../../../../environments/enviromentDevelopment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
private apiServerUrl = environment.apiUrl+"categories/";
  constructor(private http:HttpClient) { }
  getCategoryById(id: number) {
    return this.http.get<ICategorie>(`${this.apiServerUrl}${id}`);
  }
  getCategorys(): Observable<Category> {
    return this.http.get<Category>(this.apiServerUrl);
  }
  editCategory(id: number, categorie: ICategorie): Observable<ICategorie> {
    return this.http.put<ICategorie>(`${this.apiServerUrl}${id}`, categorie);
  }
  addCategory(categorie: ICategorie): Observable<ICategorie> {
    return this.http.post<ICategorie>(this.apiServerUrl, categorie);
  }
  deleteCategory(categorieId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}${categorieId}`);
  }
}
