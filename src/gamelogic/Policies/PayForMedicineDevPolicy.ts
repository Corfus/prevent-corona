import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class PayForMedicineDevPolicy extends GamePolicy {
    isEnactable(state: GameState, countryEntity: CountryEntity): boolean 
    {
        const country = state.getCountry(countryEntity);
        if (country.medicine.value != 100)
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
      country.money.relativeRateOfChange -= 0.01;
      country.medicine.absoluteRateOfChange = 0.5;
      this.isEnacted = true;
      return true;
    }
  
    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.money.relativeRateOfChange += 0.01;
      country.medicine.absoluteRateOfChange = 0;
      this.isEnacted = false;
      return true;
    }
  
    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
        const country = state.getCountry(countryEntity);
        if(country.medicine.value == 100)
        {
            this.onRevoke(state,countryEntity);
            country.deathProbability.relativeRateOfChange -= 0.5;
        }
      return true;
    }
  
  }