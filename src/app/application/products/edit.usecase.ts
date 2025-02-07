import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../domain/products/iproduct';
import { ProductsService } from '../../infrastructure/products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class EditProductUseCase {
  constructor(private productDatasource: ProductsService) {}

  execute(id: number, product: IProduct): Observable<IProduct> {
    return this.productDatasource.editProduct(id, product);
  }
}
