import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
      this.products = data.products;
      console.log(this.products)
    },
    error: (err) => {
      console.error('Error obteniendo productos:', err);
    }
    });
  }
}
