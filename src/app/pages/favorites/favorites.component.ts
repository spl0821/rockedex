import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokeDetail } from 'src/app/interfaces/pkmBase.interface';

/**
 * Shows the list of favorites pokemons
 *
 * @class FavoritesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  /**
   * Array of pokemons
   *
   * @type {PokeDetail[]}
   */
  pokemons: PokeDetail[] = [];

  /**
   * Creates an instance of FavoritesComponent.
   * @param {Router} router
   * @param {Store<{count: number, detail: PokeDetail}>} store Reducer
   */
  constructor(private router: Router, private store: Store<{count: number, detail: PokeDetail}>) { }

  /**
   * Launched when page is being created
   *
   * @memberof FavoritesComponent
   */
  ngOnInit(): void {
    this.store.subscribe(()=>{
      this.getPokemonsStorage();
    })
  }

  /**
   * Navigates to dashborad page
   */
  goDashboard(){
    this.router.navigateByUrl('/');
  }

  /**
   * Get array of pokemons from the local storage
   */
  getPokemonsStorage(){
    if(localStorage.getItem('favorite_pokemons')){
      this.pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
      this.pokemons.map(poke => poke.checked = true);
      this.pokemons.sort((a,b)=>{
        return a.id - b.id;
      })
    }else{
      this.goDashboard();
    }
  }

}
