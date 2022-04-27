import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { LayoutModule } from "@angular/cdk/layout";
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchFormComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    MovieComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    PipesModule,
    LayoutModule,
    RatingModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }
