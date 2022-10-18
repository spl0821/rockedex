import { Component, Input } from '@angular/core';

/**
 * Pokemon "Types" buttons
 *
 * @class PkmButtonComponent
 */
@Component({
  selector: 'app-pkm-button',
  templateUrl: './pkm-button.component.html',
  styleUrls: ['./pkm-button.component.scss']
})
export class PkmButtonComponent {

  /**
   * Pokemon "Type"
   *
   * @type {string} Text to be shown in button
   */
  @Input() pkmType: string = '';

  /**
   * Creates an instance of PkmButtonComponent.
   */
  constructor() { }

}
