import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from '../../domain/categories/icategorie';
import { CategoriesService } from '../../infrastructure/categories/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class EditCategoryUseCase {
  constructor(private categoryDatasource: CategoriesService) {}

  execute(id: number, category: ICategorie): Observable<ICategorie> {
    return this.categoryDatasource.editCategory(id, category);
  }
}
