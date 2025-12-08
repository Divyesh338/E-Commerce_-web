import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { CategoryComponent } from './category/category.component';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';
import { TagComponent } from './tag/tag.component';
import { UserTypeComponent } from './user-type/user-type.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'brand-logo',
        component: BrandLogoComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'color',
        component: ColorComponent
      },
      {
        path: 'size',
        component: SizeComponent
      },
      {
        path: 'tag',
        component: TagComponent
      },
      {
        path: 'userType',
        component: UserTypeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
