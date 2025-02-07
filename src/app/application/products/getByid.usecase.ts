import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../domain/products/iproduct';
import { ProductsService } from '../../infrastructure/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdUseCase {
  constructor(private productDatasource: ProductsService) {}

  execute(id: number): Observable<IProduct> {
    return this.productDatasource.getProductById(id);
  }
}
