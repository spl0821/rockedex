import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokeDetail, PokeResponse, PokeResults } from '../interfaces/pkmBase.interface';

/**
 * Access to api url variable
 * 
 * @type {string}  
 **/
const URL = environment.url;

/**
 * Pokemon service
 *
 * @export
 * @class PokemonService
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /**
   * Url params to search pokemons
   *
   * @type {(string | null)}
   */
  next_page_url: string | null = 'pokemon?limit=9&offset=0';

  /**
   * Creates an instance of PokemonService.
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) { }

  /**
   * Get array list of pokemons
   *
   * @return {*} Initial array of pokemons
   */
  getPokemons(): Promise<PokeResults[]>{
    return new Promise((resolve, reject)=>{
      this.http.get<PokeResponse>(`${URL}/${this.next_page_url}`).subscribe(response=>{
        this.next_page_url = response.next;
        resolve(response.results);
      }, err=>{
        reject(err);
      });
    });
  }

  /**
   * Get pokemon detail
   *
   * @param {string} url
   * @return {*} Pokemon detail
   */
  getPokeDetail(url: string): Promise<PokeDetail>{
    return new Promise((resolve, reject)=> {
      this.http.get<PokeDetail>(`${url}`).subscribe(response=>{
        resolve(response);
      }, err=>{
        reject(err);
      })
    })
  }

  /**
   * Get next array of pokemons depending on the "next_page_url" variable
   *
   * @return {*} Next array of pokemons
   */
  getMorePokemons(): Promise<PokeResults[]>{
    return new Promise((resolve, reject)=>{
      if(this.next_page_url !== null){
        this.http.get<PokeResponse>(`${this.next_page_url}`).subscribe(response=>{
          this.next_page_url = response.next;
          resolve(response.results);
        }, err=>{
          reject(err);
        });
      }
    });
  }

  /**
   * Reset url to the initial state
   *
   * @memberof PokemonService
   */
  restartUrl(){
    this.next_page_url = 'pokemon?limit=9&offset=0';
  }

  /**
   * Search pokemon by name
   *
   * @param {string} name
   * @return {*}  Pokemon found by name
   */
  searchPokeByName(name: string): Promise<PokeDetail>{
    return new Promise((resolve, reject)=>{
      this.http.get<PokeDetail>(`${URL}/pokemon/${name}`).subscribe(response=>{
        resolve(response);
      }, err=>{
        reject(err);
      })
    })
  }
}
