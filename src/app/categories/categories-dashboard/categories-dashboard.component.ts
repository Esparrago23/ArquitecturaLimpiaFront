import { Component,OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ICategorie } from '../icategorie';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent {
  categories: ICategorie[] = [];

  constructor(private categoriesService: CategoriesService,private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategorys().subscribe({
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
        this.categoriesService.deleteCategory(id).subscribe(() => {
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
