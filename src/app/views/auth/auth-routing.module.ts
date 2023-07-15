import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ROUTER } from 'src/app/shared/constants/routers';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessfulAccountComponent } from './successful-account/successful-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ROUTER.FORGOT_PASSWORD, component: ForgotPasswordComponent },
      { path: ROUTER.SIGNIN, component: SigninComponent },
      { path: ROUTER.SIGNUP, component: SignupComponent },
      { path: ROUTER.SUCCESSFUL_ACCOUNT, component: SuccessfulAccountComponent},
      { path: ROUTER.CHANGE_PASSWORD, component:ChangePasswordComponent },
      { path: '**', redirectTo: ROUTER.SIGNIN }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
