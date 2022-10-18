import { Component, Input } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { PokeDetail } from 'src/app/interfaces/pkmBase.interface';
import { addFavorite } from 'src/app/reducers/detail.actions';
import { decrement, increment } from 'src/app/reducers/favorites.actions';

/**
 * Heart icon component
 *
 * @export
 * @class PkmFavButtonComponent
 */
@Component({
  selector: 'app-pkm-fav-button',
  templateUrl: './pkm-fav-button.component.html',
  styleUrls: ['./pkm-fav-button.component.scss']
})
export class PkmFavButtonComponent {

  /**
   * Pokemon checked value
   *
   * @type {boolean}
   */
  @Input() checked: boolean = false;

  /**
   * Receives the pokemon where this component is called
   *
   * @type {PokeDetail}
   */
  @Input() pokemon!: PokeDetail;

  /**
   * Creates an instance of PkmFavButtonComponent.
   * @param {Store<{count: number, detail: PokeDetail}>} store Reducer
   */
  constructor(private store: Store<{count: number, detail: PokeDetail}>) { 
  }

  /**
   * Add clicked pokemon to favorites list in localstorage or removes it
   * Set the heart icon color depending on checked property
   */
  favorite(){
    let favorite_pokemons: PokeDetail[] = [];
    this.checked ? this.decreaseFavorites() : this.increaseFavorites();
    this.checked = !this.checked;
    const pokeCopy = {...this.pokemon};
    if(localStorage.getItem('favorite_pokemons')){
      favorite_pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
      const found = favorite_pokemons.find(el => el.id == this.pokemon.id);
      if(found !== undefined){
        favorite_pokemons = favorite_pokemons.filter(el=> el.id !== this.pokemon.id)
        pokeCopy.checked = false;
      }else{
        favorite_pokemons.push(this.pokemon);
        pokeCopy.checked = true;
      }
      localStorage.setItem('favorite_pokemons', JSON.stringify(favorite_pokemons))
    }else{
      pokeCopy.checked = true;
      favorite_pokemons.push(this.pokemon)
      localStorage.setItem('favorite_pokemons', JSON.stringify(favorite_pokemons))
    }
    this.updateHeartIcon(pokeCopy)
  }

  /**
   * Call reducer action to increase counter in heart icon
   */
  increaseFavorites(){
    this.store.dispatch(increment());
  }

  /**
   * Call reducer action to decrease counter in heart icon
   */
  decreaseFavorites(){
    this.store.dispatch(decrement());
  }

  /**
   * Update pokemon checked property using reducer action
   *
   * @param {PokeDetail} poke Pokemon to update checked property
   */
  updateHeartIcon(poke: PokeDetail){
    this.store.dispatch(addFavorite({pokemon: poke}))
  }

}
