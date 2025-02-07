import { Component,OnInit } from '@angular/core';
import { IProduct } from '../../../domain/products/iproduct';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { GetProductsUseCase } from '../../../application/products/get.usecase';
import { DeleteProductUseCase } from '../../../application/products/delete.usecase';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrl: './products-dashboard.component.css'
})
export class ProductsDashboardComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private router: Router,
    private getProductsUseCase: GetProductsUseCase, 
    private deleteProductUseCase: DeleteProductUseCase

  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.getProductsUseCase.execute().subscribe({
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
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        confirmButton: 'custom-swal-button',
        cancelButton: 'custom-swal-cancel'
      },
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteProductUseCase.execute(id).subscribe(() => {
          Swal.fire('Eliminado', 'El producto ha sido eliminado con éxito.', 'success');
          this.loadProducts(); 
        });
      }
    });
  }
  navigateToCategories(): void {
    this.router.navigate(['/categories']);
  }
}
