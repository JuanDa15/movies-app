import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing.interface';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperEvents } from 'swiper/types';
import { environment as env } from 'src/environments/environment';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { GetGenresListService } from 'src/app/services/get-genres-list.service';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'movies-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SlideShowComponent implements OnInit {
  /**
   * [url]
   * @description Images url
   * @type {string}
   * @memberof SlideShowComponent
   */
  public url: string;
  /**
   * [config]
   * @description swipper configuration
   * @type {SwiperOptions}
   * @memberof SlideShowComponent
   */
  public config: SwiperOptions;
  /**
   * [swiper]
   * @description ref to the swipper component
   * @type {SwiperComponent}
   * @memberof SlideShowComponent
   */
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  /**
   * [dataList]
   * @description Receives the list of movies to show in the swipper
   * @type {Movie[]}
   * @memberof SlideShowComponent
   */
  @Input() dataList: Movie[];
  /**
   * Creates an instance of SlideShowComponent.
   * @param {GetGenresListService} _genresListService
   * @memberof SlideShowComponent
   */
  constructor(private _genresListService: GetGenresListService) {
    this.dataList = [];
    this._genresListService;
    this.url = env.api;
    this.config  = {
      direction: 'horizontal',
      slidesPerGroup: 1,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      lazy: true,
      loop: true,
    };
  }

  ngOnInit(): void {}
  /**
   * [randomColor]
   * @description returns a color for the genres
   * @return {*}  {string}
   * @memberof SlideShowComponent
   */
  public randomColor(): string {
    return '#000044'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
