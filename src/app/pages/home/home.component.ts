import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing.interface';
import { NowPlayingService } from 'src/app/services/now-playing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * [moviesList]
   * @description Storages the list of movies displayed in the swipper
   * @type {Movie[]}
   * @memberof HomeComponent
   */
  public moviesList: Movie[];
  /**
   * Creates an instance of HomeComponent.
   * @param {NowPlayingService} _nowPlayingService
   * @param {ParamsService} _paramsService
   * @memberof HomeComponent
   */
  constructor(private _nowPlayingService: NowPlayingService) {
    this.moviesList = [];
  }

  ngOnDestroy(): void {
    this._nowPlayingService.currentPage = 1;
  }

  ngOnInit(): void {
    this.fetchData(true);
  }
  /**
   * [fetchData]
   * @description fetch the movies data
   * @param {boolean} event
   * @memberof HomeComponent
   */
  fetchData(event: boolean) {
    if (event) {
      this._nowPlayingService.getNowPlaying().subscribe({
        next: (movies) => {
          this.moviesList.push(...movies)
        },
      });
    }
  }
}
