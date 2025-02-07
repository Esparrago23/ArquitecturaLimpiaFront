import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.css'
})
export class CategoriesFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: number | null = null; 

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.categoryId = +id;
        this.loadCategory(this.categoryId);
      }
    });
  }

  loadCategory(id: number): void {
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.categoryForm.patchValue({
        name: category.Name,
        description: category.Description
      });
    });
  }

  saveCategory(): void {
    if (this.categoryForm.invalid) return;

    const categoryData = this.categoryForm.value;

    if (this.categoryId) {
      this.categoryService.editCategory(this.categoryId, categoryData).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryService.addCategory(categoryData).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/categories']);
  }
}