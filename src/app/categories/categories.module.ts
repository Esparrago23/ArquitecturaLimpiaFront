import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDashboardComponent } from './categories-dashboard/categories-dashboard.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesDashboardComponent,
    CategoriesFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
