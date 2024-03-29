import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { SuccessfulAccountComponent } from './successful-account/successful-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SigninComponent,
    SignupComponent,
    SuccessfulAccountComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class AuthModule { }
