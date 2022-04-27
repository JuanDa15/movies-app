import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsService } from './params.service';
import { environment as env } from 'src/environments/environment';
import { DetailedMovie } from '../interfaces/detailedMovie.interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _endPoint:string;
  private _defaultParams:HttpParams;


  constructor(private _http:HttpClient,
              private _paramsService:ParamsService){
    this._endPoint = 'movie/';
    this._defaultParams = this._paramsService.getParams();
  }

  getMovie(id: number): Observable<DetailedMovie | null>{
    return this._http.get<DetailedMovie>(`${env.api}${this._endPoint}${id}`,{params: this._defaultParams}).pipe(
      catchError( err => of(null))
    )
  }
}
