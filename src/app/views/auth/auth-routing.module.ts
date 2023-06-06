import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER } from 'src/app/shared/constants/routers';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: ROUTER.SIGNIN, component: SigninComponent },
      { path: '**', redirectTo:'signin' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
