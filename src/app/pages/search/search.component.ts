import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/interfaces/now-playing.interface';
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  /**
   * [results]
   * @description Storage the list of results
   * @type {Movie[]}
   * @memberof SearchComponent
   */
  public results: Movie[];
  /**
   * [_queryValue]
   * @description storage the last value searched
   * @type {string}
   * @memberof SearchComponent
   */
  private _queryValue: string;
  /**
   * Creates an instance of SearchComponent.
   * @param {ActivatedRoute} _AR
   * @param {SearchMovieService} _searchMovieService
   * @memberof SearchComponent
   */
  constructor(
    private _AR: ActivatedRoute,
    private _searchMovieService: SearchMovieService
  ) {
    this.results = [];
    this._queryValue = '';
  }

  ngOnDestroy(): void {
    this._searchMovieService.currentPage = 1;
  }

  ngOnInit(): void {
    this._AR.params
      .pipe(
        switchMap(({ request }) => {
          this._queryValue = request;
          return this._searchMovieService.searchMovie(request);
        })
      )
      .subscribe({
        next: (val) => (this.results = val),
      });
  }

  fetchData(event: boolean) {
    if (event) {
      this._searchMovieService.searchMovie(this._queryValue).subscribe({
        next: (val) => this.results.push(...val),
      });
    }
  }
}
