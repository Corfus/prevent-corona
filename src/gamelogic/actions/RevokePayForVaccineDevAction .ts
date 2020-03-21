import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class RevokePayForVaccineDevAction  extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
        if(state.getCountryEnactedPolicies(country).has('PayForVaccineDev'))
        {
            return true;
        }
        return false;
    }
  
    run(state: GameState, countryEntity: CountryEntity): void {
      state.revokePolicy(countryEntity,'PayForVaccineDev');
    }
  }