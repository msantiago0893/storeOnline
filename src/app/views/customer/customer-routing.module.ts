import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ROUTER } from '@constants/routers';
import { GalleryComponent } from './gallery/gallery.component';
import { MyAccountComponent } from '../profile/my-account/my-account.component';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    children: [
      { path: ROUTER.GALLERY, component: GalleryComponent },
      { path: ROUTER.MY_ACCOUNT, component: MyAccountComponent },
      { path: ROUTER.CONTACT, component: ContactComponent },
      { path: ROUTER.SHOPPPING, component: ShoppingComponent },
      { path: ROUTER.CHANGE_PASSWORD, component: ChangePasswordComponent },
      { path: '**', redirectTo: ROUTER.GALLERY }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
