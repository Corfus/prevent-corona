import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class EnactPayForMedicineDevAction extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
        if(state.getCountryEnactedPolicies(country).has('PayForMedicineDev'))
        {
            return false;
        }
        return true;
    }
  
    run(state: GameState, countryEntity: CountryEntity): void {
      state.enactPolicy(countryEntity,'PayForMedicineDev');
    }
  }