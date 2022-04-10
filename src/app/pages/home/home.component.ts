import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NowPlaying } from 'src/app/interfaces/now-playing.interface';
import { NowPlayingService } from 'src/app/services/now-playing.service';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * @var _defaultParams
   * @description gets the default params for the movies api request
   * @private
   * @type {HttpParams}
   * @memberof HomeComponent
   */
  private _defaultParams:HttpParams;
  /**
   * Creates an instance of HomeComponent.
   * @param {NowPlayingService} _nowPlayingService
   * @param {ParamsService} _paramsService
   * @memberof HomeComponent
   */
  constructor(private _nowPlayingService:NowPlayingService,
              private _paramsService:ParamsService) { 
    this._defaultParams = this._paramsService.getParams();
  }

  ngOnInit(): void {
    this.posterMovies();
  }

  /**
   * @method posterMovies
   * @description returns the movies that are playing in cinemas 
   * @returns {void}
   * @memberof HomeComponent
   */
  posterMovies():void{
    const requestParams:HttpParams = this._defaultParams.set('page',1);  
    this._nowPlayingService.getNowPlaying(requestParams).subscribe({
      next: (response ) => {
        console.log(response);
      },
      error: (err:any) => {
        console.log(err)
      } 
    });
  }
}
