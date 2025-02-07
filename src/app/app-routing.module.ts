import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDashboardComponent } from './products/products-dashboard/products-dashboard.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsDashboardComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/new', component: ProductsFormComponent },
{ path: 'products/edit/:id', component: ProductsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
