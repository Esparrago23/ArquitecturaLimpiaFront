import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductsFormComponent } from './products-form/products-form.component';
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
