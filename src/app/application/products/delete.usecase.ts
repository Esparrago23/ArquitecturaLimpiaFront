import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../infrastructure/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCase {
  constructor(private productDatasource: ProductsService) {}

  execute(id: number): Observable<void> {
    return this.productDatasource.deleteProduct(id);
  }
}
