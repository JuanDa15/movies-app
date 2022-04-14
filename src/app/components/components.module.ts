import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchFormComponent,
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent
  ]
})
export class ComponentsModule { }
