import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
