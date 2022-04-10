import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { NowPlaying } from '../interfaces/now-playing.interface';

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
  private _endPoint:string = 'movie/now_playing';
  /**
   * Creates an instance of NowPlayingService.
   * @param {HttpClient} _http
   * @memberof NowPlayingService
   */
  constructor(private _http:HttpClient) {}
  /**
   * @method getNowPlaying
   * @description method that fetch the api data
   * @param {HttpParams} params
   * @return {*}  {Observable<any>}
   * @memberof NowPlayingService
   */
  getNowPlaying(params:HttpParams):Observable<NowPlaying>{
    return this._http.get<NowPlaying>(`${env.api}${this._endPoint}`,{params})
  }
}
