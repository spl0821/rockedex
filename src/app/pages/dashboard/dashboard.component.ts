import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokeDetail } from 'src/app/interfaces/pkmBase.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

/**
 * First view component present in the application
 *
 * @class DashboardComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  /**
   * Array of pokemons provided by API
   *
   * @type {PokeDetail[]}
   */
  pokemons: PokeDetail[] = [];

  /**
   * Input form control
   */
  pokemon_field = new FormControl('', Validators.required);

  /**
   * Enable o disable the back arrow icon when searching an specific pokemon by name
   *
   * @type {boolean}
   */
  enable_arrow_back: boolean = false;

  /**
   * Creates an instance of DashboardComponent.
   * @param {PokemonService} pkmService
   * @param {Router} router
   */
  constructor(private pkmService: PokemonService, private router: Router) { }

  /**
   * Call get pokemons method when view is loaded each time
   */
  ngOnInit(): void {
    this.getPokemons();
  }

  /**
   * Call a method in pokemonService to restart the URL 
   */
  ngOnDestroy(): void {
    this.pkmService.restartUrl();
  }

  /**
   * Get list of pokemons through pokemonService
   * Call getPokeDetails method for each pokemon listed
   */
  getPokemons(){
    this.pkmService.getPokemons().then(results=>{
      results.forEach(poke => {
        this.getPokeDetails(poke.url);
      })
    }, err => alert(JSON.stringify(err)))
  }

  /**
   * Get pokemon details through pokemonService
   *
   * @param {string} url
   */
  getPokeDetails(url: string){
    this.pkmService.getPokeDetail(url).then(pokemon=>{
      this.searchFavorite(pokemon);
      this.pokemons.push(pokemon);
      this.pokemons.sort((a,b)=> {
        return a.id - b.id;
      })
    })
  }

  /**
   * Load more pokemons when scrolled down
   */
  seeMore(){
    this.pkmService.getMorePokemons().then(results=>{
      results.forEach(poke => {
        this.getPokeDetails(poke.url);
      })
    })
  }

  /**
   * Navigate to detail page
   * Set pokemon information in localStorage
   * @param {PokeDetail} pokemon
   * @memberof DashboardComponent
   */
  goDetail(pokemon: PokeDetail){
    localStorage.setItem('detail', JSON.stringify(pokemon));
    this.router.navigateByUrl('/detail')
  }

  /**
   * Validates if pokemon is a favorite one
   *
   * @param {PokeDetail} pokemon
   */
  searchFavorite(pokemon: PokeDetail){
    let favorite_pokemons: PokeDetail[] = [];
      if(localStorage.getItem('favorite_pokemons')){
        favorite_pokemons = JSON.parse(localStorage.getItem('favorite_pokemons') as string);
        const found = favorite_pokemons.find(el => el.id == pokemon.id);
        if(found !== undefined){
          pokemon.checked = true;
        }else{
          pokemon.checked = false;
        }
      }else{
        pokemon.checked = false;
      }
  }

  /**
   * Search pokemon in API by using name
   */
  searchPokemon(){
    this.pokemons.length = 0;
    if(this.pokemon_field.valid){
      this.pkmService.searchPokeByName(this.pokemon_field.value).then(poke=>{
        this.pokemons = [poke];
        this.searchFavorite(poke)
        this.pokemon_field.reset();
        this.enable_arrow_back = true;
      }, err=>{
        alert('No existe pokemon');
        this.reloadPokemons();
      });
    }
  }

  /**
   * Restart pokemon array 
   * Restart pokemon_field input from control
   * Delete arrow back from the view
   */
  reloadPokemons(){
    this.pokemons = [];
    this.pokemon_field.reset();
    this.pkmService.restartUrl();
    this.getPokemons();
    this.enable_arrow_back = false;
  }

}
