import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing.interface';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  /**
   * [movie]
   * @description Receives the data of the movie
   * @type {Movie}
   * @memberof MovieComponent
   */
  @Input('movie-data') public movie!: Movie;
  /**
   * [onClick]
   * @description Emmiter that emits the movie id
   * @type {EventEmitter<number>}
   * @memberof MovieComponent
   */
  @Output('onClickMovie') public onClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  /**
   * [clickMovie]
   * @description Method that fires the emitter
   * @memberof MovieComponent
   */
  public clickMovie(): void{
    this.onClick.emit(this.movie.id);
  }
}
