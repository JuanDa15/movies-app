import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../interfaces/genres.interface';
import { GetGenresListService } from '../services/get-genres-list.service';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  public genresList:Genre[];

  constructor(private _genresListService:GetGenresListService){
    this.genresList = this._genresListService.genres;
  }
  transform(id:number): string {
    return this.genresList.find((genre:Genre) => genre.id === id)?.name || '';
  }

}
