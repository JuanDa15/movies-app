import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsService } from './params.service';
import { environment as env } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cast, Credits } from '../interfaces/credits.interface';
@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  private _endPoint:string;
  private _defaultParams:HttpParams;


  constructor(private _http:HttpClient,
              private _paramsService:ParamsService){
    this._endPoint = 'movie/';
    this._defaultParams = this._paramsService.getParams();
  }

  getCredits(id: number): Observable<Cast[]>{
    return this._http.get<Credits>(`${env.api}${this._endPoint}${id}/credits`,{params: this._defaultParams}).pipe(
      map( (response:Credits) => response.cast),
      catchError( err => of([]))
    )
  }
}
