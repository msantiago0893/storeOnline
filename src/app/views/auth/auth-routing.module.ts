import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER } from 'src/app/shared/constants/routers';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: ROUTER.SIGNIN, component: SigninComponent },
      { path: ROUTER.SIGNUP, component: SignupComponent },
      { path: '**', redirectTo: ROUTER.SIGNIN }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
