import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsService } from './params.service';
import { environment as env } from 'src/environments/environment';
import { Search } from '../interfaces/search.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie } from '../interfaces/now-playing.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  private _endPoint:string;
  private _defaultParams:HttpParams;
  private _currentPage:number;
  private _requestInProgress:boolean;

  constructor(private _http:HttpClient,
              private _paramsService:ParamsService){
    this._endPoint = 'search/movie';
    this._defaultParams = this._paramsService.getParams();
    this._currentPage = 1;
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

  searchMovie( value:string ):Observable<Movie[]>{
    if(!this.isLoading){
      this.isLoading = true;
      const params: HttpParams = this._defaultParams
          .set('page',this.currentPage)
          .set('query',value)
          .set('include_adult',true);

      return this._http.get<Search>(`${env.api}${this._endPoint}`,{params}).pipe(
        map( response => response.results),
        tap( () => {
          this.currentPage++;
          this.isLoading = false;
        })
      );
    }else{
      return of([]);
    }
  }
}
