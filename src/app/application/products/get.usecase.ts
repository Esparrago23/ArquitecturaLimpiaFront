import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../domain/products/product';
import { ProductsService } from '../../infrastructure/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductsUseCase {
  constructor(private productDatasource: ProductsService) {}

  execute(): Observable<product> {
    return this.productDatasource.getProducts();
  }
}
