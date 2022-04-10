import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor() { }
  /**
   * @method getParams
   * @description returns the default params for the request
   * @return {*}  {HttpParams}
   * @memberof ParamsService
   */
  getParams():HttpParams{
    return new HttpParams()
            .set('api_key',env.tmdbKey)
            .set('language','en-US');
  }
}
