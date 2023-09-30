import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    ImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageDirective
  ]
})
export class ImageModule { }
