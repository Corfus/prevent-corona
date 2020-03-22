import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {GameState} from '../../../../gamelogic/GameState';

interface IGameValueCollection {
  tick: number;
  deaths: number;
  infected: number;
  healed: number;
  deathrate: number;
  population: number;
  state_capital: string;
  acceptance: string;
  happiness: string;
  vaccines: number;
  medicine: number
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
      deaths: Math.round(countryState.deaths),
      infected: Math.round(countryState.numberOfInfected.value),
      deathrate: Math.round(countryState.deathProbability.value),
      healed: Math.round(countryState.numberOfRecovered.value),
      population: Math.round(countryState.totalPopulation.value),
      happiness: `${(countryState.happiness.value).toFixed(1)} %`,
      state_capital: `${countryState.money.value} €`,
      acceptance: `${(countryState.acceptance.value).toFixed(1)} %`,
      vaccines: Number(countryState.vaccines.value.toFixed(1)),
      medicine: Number(countryState.medicine.value.toFixed(1))
    };
  }
}
