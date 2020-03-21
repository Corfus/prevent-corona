import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class RevokePayForMedicineDevAction extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
        if(state.getCountryEnactedPolicies(country).has('PayForMedicineDev'))
        {
            return true;
        }
        return false;
    }
  
    run(state: GameState, countryEntity: CountryEntity): void {
      state.revokePolicy(countryEntity,'PayForMedicineDev');
    }
  }