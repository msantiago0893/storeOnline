import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ImageModule } from '@directives/image/image.module';


@NgModule({
  declarations: [
    MyAccountComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ImageModule
  ]
})
export class ProfileModule { }
