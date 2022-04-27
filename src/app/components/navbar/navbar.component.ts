import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * Creates an instance of NavbarComponent.
   * @param {Router} _router
   * @memberof NavbarComponent
   */
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  /**
   * [searchMovie]
   * @description Navigates to the search movie page
   * @param {string} event value emmited from the searchbar
   * @memberof NavbarComponent
   */
  public searchMovie(event: string): void {
    if (event.length === 0) {
      this._router.navigateByUrl('/');
    }
    this._router.navigate(['search', event]);
  }
}
