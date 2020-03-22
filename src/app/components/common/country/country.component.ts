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
    console.log(Array.from(this.gameState.getCountryEnactedPolicies(this.gameState.playerCountry)));
    return Array.from(this.gameState.getCountryEnactedPolicies(this.gameState.playerCountry));
  }
}
