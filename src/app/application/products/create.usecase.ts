import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../domain/products/iproduct';
import { ProductsService } from '../../infrastructure/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class CreateProductUseCase {
  constructor(private productDatasource: ProductsService) {}

  execute(product: IProduct): Observable<IProduct> {
    return this.productDatasource.addProduct(product);
  }
}
