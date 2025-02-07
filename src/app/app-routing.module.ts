import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDashboardComponent } from './presentation/products/products-dashboard/products-dashboard.component';
import { ProductsFormComponent } from './presentation/products/products-form/products-form.component';
import { CategoriesFormComponent } from './presentation/categories/categories-form/categories-form.component';
import { CategoriesDashboardComponent } from './presentation/categories/categories-dashboard/categories-dashboard.component';

const routes: Routes = [
  { path: 'products', component: ProductsDashboardComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'products/new', component: ProductsFormComponent },
  { path: 'products/edit/:id', component: ProductsFormComponent },
  { path: 'categories', component: CategoriesDashboardComponent },
  { path: 'categories/new', component: CategoriesFormComponent },
  { path: 'categories/edit/:id', component: CategoriesFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
