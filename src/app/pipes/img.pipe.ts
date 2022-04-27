import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipe implements PipeTransform {

  transform(endPoint:string): string {
    const url:string = 'https://image.tmdb.org/t/p/w500'
    return (endPoint !== null) ? `${url}${endPoint}` : 'assets/img/No-Image-Placeholder.svg';
  }

}
