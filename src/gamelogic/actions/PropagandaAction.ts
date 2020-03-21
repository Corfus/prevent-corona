import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class PropagandaAction extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
      return true;
    }
  
    run(state: GameState, countryEntity: CountryEntity): void {
      const country = state.getCountry(countryEntity);
      country.money.value -= 10000;
      country.acceptance.value += 1;
    }
  }