import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokeDetail } from 'src/app/interfaces/pkmBase.interface';
import { addFavorite } from 'src/app/reducers/detail.actions';
import { decrement, increment } from 'src/app/reducers/favorites.actions';

/**
 * Shows the pokemon features
 *
 * @class DetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  /**
   * Selected pokemon
   *
   * @type {(PokeDetail | any)}
   */
  pokemon: PokeDetail | any = {};

  /**
   * Text of the lower button present on page
   *
   * @type {string}
   */
  btnText: string = 'Agregar a favoritos';

  /**
   * Creates an instance of DetailComponent.
   * @param {Router} router
   * @param {Store<{count: number, detail: PokeDetail}>} store Reducer
   */
  constructor(private router: Router, private store: Store<{count: number, detail: PokeDetail}>) { 
    
  }
  
  /**
   * Get selected pokemon from the localStorage
   */
  ngOnInit(): void {
    if(localStorage.getItem('detail')){
      this.pokemon = localStorage.getItem('detail');
      this.pokemon = JSON.parse(this.pokemon);
    }else{
      this.goDashboard();
    }
    this.searchFavoritePokemon();
  }

  /**
   * Navigates back to the Dashboard
   */
  goDashboard(){
    this.router.navigateByUrl('/');
  }

  /**
   * Search if selected pokemon is a favorite one
   * Set the button text depending on previous condition
   */
  searchFavoritePokemon(){
    let favorite_pokemons: PokeDetail[] = [];
    if(localStorage.getItem('favorite_pokemons')){
      favorite_pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
      const found = favorite_pokemons.find(el => el.id == this.pokemon.id);
      if(found !== undefined){
        this.setButtonText('Eliminar de favoritos');
      }else{
        this.setButtonText('Agregar a favoritos');
      }
    }else{
      this.setButtonText('Agregar a favoritos');
    }
  }

  /**
   * Add or remove pokemon from the localstorage
   */
  addRemoveFavorite(){
    let favorite_pokemons: PokeDetail[] = [];
    const pokeCopy = {...this.pokemon};
    if(localStorage.getItem('favorite_pokemons')){
      favorite_pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
      const found = favorite_pokemons.find(el => el.id == this.pokemon.id);
      if(found !== undefined){
        favorite_pokemons = favorite_pokemons.filter(el=> el.id !== this.pokemon.id)
        pokeCopy.checked = false;
      }else{
        pokeCopy.checked = true;
        favorite_pokemons.push(this.pokemon);
      }
      localStorage.setItem('favorite_pokemons', JSON.stringify(favorite_pokemons))
    }else{
      pokeCopy.checked = true;
      favorite_pokemons.push(this.pokemon)
      localStorage.setItem('favorite_pokemons', JSON.stringify(favorite_pokemons));
    }
    this.searchFavoritePokemon();
    this.updateHeartChecked(pokeCopy)
  }

  /**
   * Set the danger button text 
   *
   * @param {string} text New text
   */
  setButtonText(text: string){
    this.btnText = text;
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
  updateHeartChecked(poke: PokeDetail){
    this.store.dispatch(addFavorite({pokemon: poke}))
  }

}
