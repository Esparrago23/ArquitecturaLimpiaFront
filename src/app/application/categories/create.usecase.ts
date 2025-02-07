import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from '../../domain/categories/icategorie';
import { CategoriesService } from '../../infrastructure/categories/services/categories.service';
@Injectable({
  providedIn: 'root'
})
export class CreateCategoryUseCase {
  constructor(private categoryDatasource: CategoriesService) {}

  execute(category: ICategorie): Observable<ICategorie> {
    return this.categoryDatasource.addCategory(category);
  }
}