import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenrePipe } from './genre.pipe';
import { ImgPipe } from './img.pipe';



@NgModule({
  declarations: [
    GenrePipe,
    ImgPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenrePipe,
    ImgPipe
  ]
})
export class PipesModule { }
