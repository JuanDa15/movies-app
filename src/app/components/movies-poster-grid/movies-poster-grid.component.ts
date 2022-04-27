import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/now-playing.interface';

@Component({
  selector: 'movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss'],
})
export class MoviesPosterGridComponent implements OnInit {
  /**
   * [onGetData]
   * @description Emits the signal to fetch new data for the infinite scroll
   * @type {EventEmitter<boolean>}
   * @memberof MoviesPosterGridComponent
   */
  @Output('onGetMovies') public onGetData: EventEmitter<boolean> = new EventEmitter();
  /**
   * [dataList]
   * @description Reveives the list of movies that will be shown in the infinity scroll
   * @type {Movie[]}
   * @memberof MoviesPosterGridComponent
   */
  @Input('movies-list') public dataList!: Movie[];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const position: number = (document.documentElement.scrollTop || document.body.scrollTop) + 900;
    const maxScroll: number = document.documentElement.scrollHeight || document.body.scrollHeight;

    if (position >= (maxScroll - 500)) {
      this.onGetData.emit(true);
    }
  }
  /**
   * Creates an instance of MoviesPosterGridComponent.
   * @param {Router} _router
   * @memberof MoviesPosterGridComponent
   */
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  /**
   * [navigateToMovie]
   * @description Navigates to the clicked movie
   * @param {number} id
   * @memberof MoviesPosterGridComponent
   */
  public navigateToMovie(id: number): void{
    this._router.navigate(['movie', id]);
  }
}
