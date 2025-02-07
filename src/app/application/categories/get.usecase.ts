import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from '../../domain/categories/icategorie';
import { Category } from '../../domain/categories/categorie';
import { CategoriesService } from '../../infrastructure/categories/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesUseCase {
  constructor(private categoryDatasource: CategoriesService) {}

  execute(): Observable<Category> {
    return this.categoryDatasource.getCategorys();
  }
}
