import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER } from 'src/app/shared/constants/routers';
import { ManagerComponent } from './manager.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UsersComponent } from './user/users/users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { ViewProductsComponent } from './category/view-products/view-products.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { MyAccountComponent } from '../profile/my-account/my-account.component';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';


const routes: Routes = [
  {
    path: '', component: ManagerComponent,
    children: [
      {
        path: ROUTER.USERS,
        component: UsersComponent
      },
      {
        path: ROUTER.ADD_USER,
        component: AddUserComponent
      },
      {
        path: ROUTER.UPDATE_USER,
        component: AddUserComponent
      },
      {
        path: ROUTER.DETAIL_USER,
        component: DetailUserComponent
      },
      {
        path: ROUTER.CATEGORIES,
        component: CategoriesComponent
      },
      {
        path: ROUTER.ADD_CATEGORY,
        component: AddCategoryComponent
      },
      {
        path: ROUTER.UPDATE_CATEGORY,
        component: AddCategoryComponent
      },
      {
        path: ROUTER.DETAIL_CATEGORY,
        component: DetailCategoryComponent
      },
      {
        path: ROUTER.CATEGORY_BY_PRODUCTS,
        component: ViewProductsComponent
      },
      {
        path: ROUTER.PRODUCTS,
        component: ProductsComponent
      },
      {
        path: ROUTER.ADD_PRODUCT,
        component: AddProductComponent
      },
      {
        path: ROUTER.UPDATE_PRODUCT,
        component: AddProductComponent
      },
      {
        path: ROUTER.DETAIL_PRODUCT,
        component: DetailProductComponent
      },
      {
        path: ROUTER.MY_ACCOUNT,
        component: MyAccountComponent
      },
      {
        path: ROUTER.UPDATE_PASSWORD,
        component: ChangePasswordComponent
      },
      {
        path: '**',
        redirectTo: ROUTER.CATEGORIES
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ManagerRoutingModule { }
