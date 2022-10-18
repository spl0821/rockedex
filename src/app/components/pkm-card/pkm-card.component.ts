import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokeDetail } from 'src/app/interfaces/pkmBase.interface';

/**
 * Pokemon card component
 *
 * @class PkmCardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-pkm-card',
  templateUrl: './pkm-card.component.html',
  styleUrls: ['./pkm-card.component.scss']
})
export class PkmCardComponent {

  /**
   * Pokemon to be shown in card
   *
   * @type {PokeDetail}
   * @memberof PkmCardComponent
   */
  @Input() pokemon: PokeDetail = {
    types: [
      {
        slot: 0,
        type: {
          name: '',
          url: ''
        }
      }
    ],
    id: 0,
    sprites: {
      front_default: undefined,
      other: {
        dream_world: {
          front_default: ''
        }
      }
    },
    checked: false
  }

  /**
   * Creates an instance of PkmCardComponent.
   * @param {Router} router
   */
  constructor(private router: Router) { }

  /**
   * Navigate to detail page to show selected pokemon
   *
   * @param {PokeDetail} pokemon Clicked pokemon
   */
  goDetail(pokemon: PokeDetail){
    localStorage.setItem('detail', JSON.stringify(pokemon));
    this.router.navigateByUrl('/detail')
  }

}
