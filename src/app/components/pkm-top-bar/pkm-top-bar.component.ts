import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

/**
 * Navbar component
 *
 * @class PkmTopBarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-pkm-top-bar',
  templateUrl: './pkm-top-bar.component.html',
  styleUrls: ['./pkm-top-bar.component.scss']
})
export class PkmTopBarComponent {

  /**
   * Logo to be shown in navbar
   *
   * @type {string}
   */
  @Input() logo: string = '';

  /**
   * Number of favorites pokemons to be displayed
   *
   * @type {number}
   */
  favorites_number: number = 0;

  /**
   * Creates an instance of PkmTopBarComponent.
   * Listen to changes on favorites count reducer and updates favorites number
   * @param {Store<{count: number}>} store
   * @param {Router} router
   */
  constructor(private store: Store<{count: number}>, private router: Router) {
    store.subscribe(state => {
      this.favorites_number = state.count;
    })
  }

  /**
   * Go to favorites page
   */
  goFavorites(){
    this.router.navigateByUrl('/favorites')
  }

}
