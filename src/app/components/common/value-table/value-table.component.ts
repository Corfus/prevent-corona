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
      happiness: Math.round(countryState.happiness.value * 10) / 10,
      deaths: Math.round(countryState.deaths),
      infected: Math.round(countryState.currentlyInfected),
      deathrate: Math.round(countryState.deathProbability.value),
      healed: Math.round(countryState.numberOfRecovered.value),
      population: Math.round(countryState.totalPopulation.value)
    };
  }
}
