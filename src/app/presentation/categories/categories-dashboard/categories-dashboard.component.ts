import { Component,OnInit } from '@angular/core';
import { CategoriesService } from '../../../infrastructure/categories/services/categories.service';
import { ICategorie } from '../../../domain/categories/icategorie';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { GetCategoriesUseCase } from '../../../application/categories/get.usecase';
import { DeleteCategoryUseCase } from '../../../application/categories/delete.usecase';
@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent implements OnInit {
  categories: ICategorie[] = [];

  constructor(private categoriesService: CategoriesService,private router: Router,
    private getCategory: GetCategoriesUseCase,
    private deleteCategory: DeleteCategoryUseCase
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.getCategory.execute().subscribe({
      next: (data) => {
      this.categories = data.categories;
      console.log(this.categories)
    },
    error: (err) => {
      console.error('Error obteniendo productos:', err);
    }
    });
  }
  navigateToForm(): void {
    this.router.navigate(['/categories/new']);
  }
  editCategorie(id: number): void {
    this.router.navigate([`/categories/edit/${id}`]);
  }
  deleteCategorie(id: number): void {
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
        this.deleteCategory.execute(id).subscribe(() => {
          Swal.fire('Eliminado', 'La categoria ha sido eliminado con éxito.', 'success');
          this.loadCategories(); 
        });
      }
    });
  }
  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
