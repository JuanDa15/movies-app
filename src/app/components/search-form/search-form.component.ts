import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  /**
   * [input]
   * @description Reference to the search bar input
   * @type {ElementRef<HTMLInputElement>}
   * @memberof SearchFormComponent
   */
  @ViewChild('searchInput', { static: true }) input!: ElementRef<HTMLInputElement>;
  /**
   * [onSearch]
   * @description Emits the value when the search button is clicked
   * @type {EventEmitter<string>}
   * @memberof SearchFormComponent
   */
  @Output('onSearch') onSearch: EventEmitter<string> = new EventEmitter();
  /**
   * [onDebounce]
   * @description Emits the searchbar value when the user types
   * @type {EventEmitter<string>}
   * @memberof SearchFormComponent
   */
  @Output('onDebounce') onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();
  /**
   * Creates an instance of SearchFormComponent.
   * @param {Router} _router
   * @memberof SearchFormComponent
   */
  constructor(private _router: Router) {}

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeDebouncer();
  }
  /**
   * [initializeDebouncer]
   * @description initialize the debouncer
   * @memberof SearchFormComponent
   */
  private initializeDebouncer():void{
    this.debouncer.pipe(debounceTime(300)).subscribe((term: string): void => {
      this.onDebounce.emit(term);
    });
  }
  /**
   * [searchMovie]
   * @description Fires the onSearch Output when the button is clicked
   * @memberof SearchFormComponent
   */
  public async searchMovie(): Promise<void>{
    if (this.input?.nativeElement?.value.trim().length !== 0) {
      this.onSearch.emit(this.input?.nativeElement?.value);
      this.debouncer.next(this.input?.nativeElement?.value);
    } else {
      await this._router.navigateByUrl('/home');
    }
  }
  /**
   * [keyPress]
   * @description Emits the onDebounce output
   * @memberof SearchFormComponent
   */
  public keyPress(): void{
    this.debouncer.next(this.input?.nativeElement?.value);
  }
}
