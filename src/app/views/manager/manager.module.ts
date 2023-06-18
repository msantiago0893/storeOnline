import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManagerComponent,
    DashboardComponent
  ],
  imports: [
    ManagerRoutingModule,
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    RouterModule
  ]
})
export class ManagerModule { }
