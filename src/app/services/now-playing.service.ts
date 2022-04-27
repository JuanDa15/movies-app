import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Movie, NowPlaying } from '../interfaces/now-playing.interface';
import { map, tap } from 'rxjs/operators';
import { ParamsService } from './params.service';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  /**
   * @var _endPoint
   * @description api endpoint to make the request
   * @private
   * @type {string}
   * @memberof NowPlayingService
   */
  private _endPoint:string;
  
  private _currentPage:number;

  private _defaultParams:HttpParams;

  private _requestInProgress:boolean;

  constructor(private _http:HttpClient,
              private _paramsService:ParamsService) {
    this._endPoint = 'movie/now_playing';
    this._currentPage = 1;
    this._defaultParams = this._paramsService.getParams();
    this._requestInProgress = false;
  }

  set currentPage(page:number){
    this._currentPage = page;
  }

  get currentPage(){
    return this._currentPage;
  }

  set isLoading(value:boolean){
    this._requestInProgress = value;
  }

  get isLoading(){
    return this._requestInProgress;
  }

  /**
   * @method getNowPlaying
   * @description method that fetch the api data
   * @param {HttpParams} params
   * @return {*}  {Observable<any>}
   * @memberof NowPlayingService
   */
  getNowPlaying():Observable<Movie[]>{
    if(!this.isLoading){
      this.isLoading = true;
      const params:HttpParams = this._defaultParams.set('page',this.currentPage);

      return this._http.get<NowPlaying>(`${env.api}${this._endPoint}`,{params}).pipe(
        map( (response: NowPlaying) => response.results ),
        tap( () => {
          this.currentPage++;
          this.isLoading = false;
        }),
      )
    }else{
      return of([]);
    }
  }
}
