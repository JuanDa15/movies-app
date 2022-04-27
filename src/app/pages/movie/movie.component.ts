import { Location } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailedMovie } from 'src/app/interfaces/detailedMovie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { ChangeDetectorRef } from '@angular/core';
import { CreditsService } from 'src/app/services/credits.service';
import { Cast } from 'src/app/interfaces/credits.interface';
import { combineLatest } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, AfterViewChecked {
  /**
   * [_id]
   * @description Storages the id of the movie
   * @private
   * @type {number}
   * @memberof MovieComponent
   */
  private _id: number;
  /**
   * [movie]
   * @description Storage the information of the movie
   * @type {DetailedMovie}
   * @memberof MovieComponent
   */
  public movie!: DetailedMovie;
  /**
   * [cast]
   * @description Storage the list of actors of the movie
   * @type {Cast[]}
   * @memberof MovieComponent
   */
  public cast: Cast[];
  /**
   * Creates an instance of MovieComponent.
   * @param {ActivatedRoute} _ar
   * @param {MovieService} _movieService
   * @param {Location} _location
   * @param {Router} _router
   * @param {ChangeDetectorRef} _cdRef
   * @param {CreditsService} _getCreditsService
   * @memberof MovieComponent
   */
  constructor(
    private _ar: ActivatedRoute,
    private _movieService: MovieService,
    private _location: Location,
    private _router: Router,
    private _cdRef: ChangeDetectorRef,
    private _getCreditsService: CreditsService
  ) {
    this._id = 0;
    this.cast = [];
  }
  ngAfterViewChecked(): void {
    this._cdRef.detectChanges();
  }

  ngOnInit(): void {
    this._id = this._ar.snapshot.params.id;
    this._fetchData();
  }
  /**
   * [_fetchData]
   * @description fetch the information of the movie
   * @private
   * @memberof MovieComponent
   */
  private _fetchData():void{
    combineLatest([
      this._movieService.getMovie(this._id),
      this._getCreditsService.getCredits(this._id),
    ]).subscribe({
      next: ([movie, cast]) => {
        movie === null ? this._router.navigate(['home']) : (this.movie = movie);
        this.cast = cast.filter((val: Cast) => val.profile_path !== null);
      },
      error: () => Swal.fire('Error', 'Error fetching the movie data', 'error')
    });
  }
  /**
   * [randomColor]
   * @return {*}  {string}
   * @memberof MovieComponent
   */
  public randomColor(): string {
    const color: string = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    return color;
  }
  /**
   * [goBack]
   * @description method that navigates to the last page
   * @memberof MovieComponent
   */
  public goBack(): void {
    this._location.back();
  }
}
