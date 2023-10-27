import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductsComponent } from './product/products/products.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UsersComponent } from './user/users/users.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

import { ImageModule } from '@directives/image/image.module';

import { HeaderModule } from '@components/header/header.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { ErrorModule } from '@components/error/error.module';
import { EmptyModule } from '@components/empty/empty.module';
import { ViewProductsComponent } from './category/view-products/view-products.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    ManagerComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddUserComponent,
    AddProductComponent,
    ProductsComponent,
    UsersComponent,
    DetailCategoryComponent,
    DetailProductComponent,
    DetailUserComponent,
    ViewProductsComponent
  ],
  imports: [
    ManagerRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    PipesModule,
    HeaderModule,
    SpinnerModule,
    ErrorModule,
    EmptyModule,
    ImageModule,
    ProfileModule
  ]
})
export class ManagerModule { }
