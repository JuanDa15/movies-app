//Angular imports
import { Component, Input, OnInit, ViewChild } from '@angular/core';
// Third party imports
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// Project imports
import { Cast } from 'src/app/interfaces/credits.interface';

@Component({
  selector: 'cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.scss'],
})
export class CastSlideshowComponent implements OnInit {
  /**
   * [config]
   * @description Swiper configurations
   * @type {SwiperOptions}
   * @memberof CastSlideshowComponent
   */
  public config: SwiperOptions = {
    direction: 'horizontal',
    cardsEffect: {
      slideShadows: true,
    },
    effect: 'cube',
    cubeEffect: {
      slideShadows: true,
    },
    slidesPerGroup: 2,
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    lazy: true,
    loop: true,
  };
  /**
   * [swiper]
   * @description reference to the swipper component
   * @type {SwiperComponent}
   * @memberof CastSlideshowComponent
   */
  @ViewChild('swiper', { static: false }) public swiper?: SwiperComponent;
  /**
   * [cast]
   * @description Receive the data that is shown in the swipper
   * @type {Cast[]}
   * @memberof CastSlideshowComponent
   */
  @Input('cast-data') public cast!: Cast[];
  
  constructor() {}

  ngOnInit(): void {}
}
