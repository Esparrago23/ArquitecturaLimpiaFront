import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent implements OnInit {
  productForm: FormGroup;
  productId: number | null = null; 

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.productForm.patchValue({
        name: product.Name,
        price: product.Price
      });
    });
  }

  saveProduct(): void {
    if (this.productForm.invalid) return;

    const productData = this.productForm.value;

    if (this.productId) {
      this.productService.editProduct(this.productId, productData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.addProduct(productData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
}