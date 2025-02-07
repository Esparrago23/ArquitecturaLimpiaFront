import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../infrastructure/categories/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteCategoryUseCase {
  constructor(private categoryDatasource: CategoriesService) {}

  execute(id: number): Observable<void> {
    return this.categoryDatasource.deleteCategory(id);
  }
}
