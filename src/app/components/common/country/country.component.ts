import {Component, Input} from '@angular/core';
import {GameState} from '../../../../gamelogic/GameState';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  @Input() gameState: GameState;

  getEnactedPolicies(): Array<string> {
    if (this.gameState) {
      return Array.from(this.gameState.getCountryEnactedPolicies(this.gameState.playerCountry));
    }
    return [];
  }

  getNeeds(): any {
    // if (this.gameState) {
    //   this.gameState.playerCountry(this.gameState.playerCountry).
    //
    // }
  }
}
