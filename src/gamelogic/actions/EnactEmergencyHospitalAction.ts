import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class EnactEmergencyHospitalAction extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
        if(state.getCountryEnactedPolicies(country).has('EnactEmergencyHospital'))
        {
            return false;
        }
        return true;
    }

    run(state: GameState, countryEntity: CountryEntity): void {
      state.enactPolicy(countryEntity,'EnactEmergencyHospital');
    }
  }
