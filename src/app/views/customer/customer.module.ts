import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageModule } from '@directives/image/image.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ContactComponent } from './contact/contact.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { EmptyModule } from '@components/empty/empty.module';


@NgModule({
  declarations: [
    CustomerComponent,
    GalleryComponent,
    ContactComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ImageModule,
    PipesModule,
    EmptyModule
  ]
})
export class CustomerModule { }
