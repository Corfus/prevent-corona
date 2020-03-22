import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {GameState} from '../../../../gamelogic/GameState';

interface IGameValueCollection {
  tick: number;
  happiness: number;
  deaths: number;
  infected: number;
  healed: number;
  deathrate: number;
  population: number;
}

@Component({
  selector: 'app-value-table',
  templateUrl: './value-table.component.html',
  styleUrls: ['./value-table.component.scss']
})
export class ValueTableComponent {
  @Input() gameState: GameState;

  extractData(gs: GameState): IGameValueCollection {
    if (!gs) {
      return;
    }
    const countryState = gs.getCountry(gs.playerCountry);
    return {
      tick: gs.tickCount,
      happiness: countryState.happiness.value,
      deaths: countryState.deaths,
      infected: countryState.numberOfInfected.value,
      healed: countryState.numberOfRecovered.value,
      deathrate: countryState.deathProbability.value,
      population: countryState.totalPopulation.value,
    };
  }
}
