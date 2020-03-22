import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';

export class RevokeClosedCompaniesAction extends GameAction {
    isActionable(state: GameState, country: CountryEntity): boolean {
        if(state.getCountryEnactedPolicies(country).has('ClosedCompanies'))
        {
            return true;
        }
        return false;
    }
  
    run(state: GameState, countryEntity: CountryEntity): void {
      state.revokePolicy(countryEntity,'ClosedCompanies');
    }
  }