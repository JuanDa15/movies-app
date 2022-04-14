import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing.interface';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperEvents } from 'swiper/types';

@Component({
  selector: 'movies-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SlideShowComponent implements OnInit {

  public config: SwiperOptions = {
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: {clickable: true},
    scrollbar: {draggable:true}
  }

  
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  @Input() dataList:Movie[];

  constructor() { 
    this.dataList = [];
  }

  ngOnInit(): void {
  }

  onSwiper( event:SwiperEvents){
    console.dir(event);
  }

  onSlideChange(){
  }

}
