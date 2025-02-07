import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../infrastructure/products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductByIdUseCase } from '../../../application/products/getByid.usecase';
import { EditProductUseCase } from '../../../application/products/edit.usecase';
import { CreateProductUseCase } from '../../../application/products/create.usecase';
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
    private router: Router,
    private editProduct: EditProductUseCase,
    private getByid: GetProductByIdUseCase,
    private createProduct: CreateProductUseCase
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
    this.getByid.execute(id).subscribe(product => {
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
      this.editProduct.execute(this.productId, productData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.createProduct.execute(productData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
}