import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../domain/products/iproduct';
import { product } from '../../../domain/products/product';
import { environment } from '../../../../environments/enviromentDevelopment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiServerUrl = environment.apiUrl+"products/";
  constructor(private http:HttpClient) { }
  getProductById(id: number) {
    return this.http.get<IProduct>(`${this.apiServerUrl}${id}`);
  }
  getProducts(): Observable<product> {
    return this.http.get<product>(this.apiServerUrl);
  }
  editProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiServerUrl}${id}`, product);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiServerUrl, product);
  }
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}${productId}`);
  }
}
