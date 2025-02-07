import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from '../../domain/categories/icategorie';
import { CategoriesService } from '../../infrastructure/categories/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryByIdUseCase {
  constructor(private categoryDatasource: CategoriesService) {}

  execute(id: number): Observable<ICategorie> {
    return this.categoryDatasource.getCategoryById(id);
  }
}
