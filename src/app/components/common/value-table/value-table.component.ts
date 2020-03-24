import {Component, Input} from '@angular/core';
import {GameState} from '../../../../gamelogic/framework/GameState';

interface IGameValueCollection {
  tick: number;
  deaths: number;
  infected: number;
  healed: number;
  deathrate: number;
  population: number;
  state_capital: number;
  acceptance: number;
  happiness: number;
  vaccines: number;
  medicine: number;
  eventId: string;
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

    const messages = gs.getEventMessageHistory();
    const eventId = (messages[messages.length - 1] || {}).eventEntity;
    return {
      tick: gs.tickCount,
      deaths: Math.round(countryState.deaths),
      infected: Math.round(countryState.currentlyInfected),
      deathrate: Math.round(countryState.deathProbability.value),
      healed: Math.round(countryState.numberOfRecovered.value),
      population: Math.round(countryState.totalPopulation.value),
      happiness: Number(countryState.happiness.value.toFixed(1)),
      state_capital: Number(countryState.money.value),
      acceptance: Number(countryState.acceptance.value.toFixed(1)),
      vaccines: Number(countryState.vaccines.value.toFixed(1)),
      medicine: Number(countryState.medicine.value.toFixed(1)),
      eventId
    };
  }
}
