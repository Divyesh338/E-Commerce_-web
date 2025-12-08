import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './manage/product-list/product-list.component';
import { AddProductsComponent } from './manage/add-products/add-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manage/product-list',
        component: ProductListComponent
      },
      {
        path: 'manage/add-product',
        component: AddProductsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
