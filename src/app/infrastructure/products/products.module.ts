import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from '../../presentation/products/products-dashboard/products-dashboard.component';
import { ProductsFormComponent } from '../../presentation/products/products-form/products-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
