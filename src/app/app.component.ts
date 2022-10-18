import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './reducers/favorites.actions';

/**
 * Full application
 *
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Application title
   */
  title = 'pokemonApp';

  /**
   * Creates an instance of AppComponent.
   * Updates favorites number depending on present pokemons in localstorage when application is launched for the first time
   * @param {Store<{count: number}>} store
   */
  constructor(private store: Store<{count: number}>){
    if(localStorage.getItem('favorite_pokemons')){
      const pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
      for (let i = 0; i < pokemons.length; i++) {
        this.store.dispatch(increment());
      }
    }
  }
}
