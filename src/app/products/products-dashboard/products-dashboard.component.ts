import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../iproduct';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService,private router: Router) {}

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
  navigateToForm(): void {
    this.router.navigate(['/products/new']);
  }
  editProduct(id: number): void {
    this.router.navigate([`/products/edit/${id}`]);
  }
  deleteProduct(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProduct(id).subscribe(() => {
          Swal.fire('Eliminado', 'El producto ha sido eliminado con éxito.', 'success');
          this.loadProducts(); 
        });
      }
    });
  }
}
