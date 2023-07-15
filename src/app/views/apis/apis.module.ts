import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category1Component } from './msantiago/category1/category1.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApisRoutingModule } from './apis-routing.module';
import { AddCategory1Component } from './msantiago/add-category1/add-category1.component';

@NgModule({
  declarations: [
    Category1Component,
    AddCategory1Component
  ],
  imports: [
    CommonModule,
    ApisRoutingModule,
    AngularMaterialModule,
    RouterModule, //Router
    FormsModule, // Formulario
    ReactiveFormsModule, // formulario

  ]
})
export class ApisModule { }
