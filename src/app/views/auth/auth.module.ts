import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
