import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class ClosedCompaniesPolicy extends GamePolicy {
    isEnactable(state: GameState, countryEntity: CountryEntity): boolean {
        const country = state.getCountry(countryEntity);
        if (country.acceptance.value > 10)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
  
    isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
      return this.isEnacted;
    }
  
    onEnact(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.happiness.absoluteRateOfChange -= 1;
      country.money.absoluteRateOfChange -= 0.01;
      country.numberOfInfected.relativeRateOfChange -= 0.03;
      this.isEnacted = true;
      return true;
    }
  
    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.happiness.absoluteRateOfChange += 1;
      country.money.absoluteRateOfChange += 0.01;
      country.numberOfInfected.relativeRateOfChange += 0.03;
      this.isEnacted = false;
      return true;
    }
  
    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
      return true;
    }
  
  }