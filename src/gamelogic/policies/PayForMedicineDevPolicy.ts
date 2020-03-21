import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class PayForMedicineDevPolicy extends GamePolicy {
  private MedicineChangeRate : number = 0.05;
  private MoneyChangeRate  : number = -0.01;
  private DeathChangeRate : number = -0.03;
    isEnactable(state: GameState, countryEntity: CountryEntity): boolean 
    {
        const country = state.getCountry(countryEntity);
        if (country.medicine.value < 100)
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
      country.money.relativeRateOfChange += this.MoneyChangeRate;
      country.medicine.absoluteRateOfChange = this.MedicineChangeRate;
      this.isEnacted = true;
      return true;
    }
  
    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.money.relativeRateOfChange -= this.MoneyChangeRate;
      country.medicine.absoluteRateOfChange = 0;
      this.isEnacted = false;
      return true;
    }
  
    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
        const country = state.getCountry(countryEntity);
        if(country.medicine.value >= 100)
        {
            this.onRevoke(state,countryEntity);
            country.deathProbability.value += this.DeathChangeRate;
        }
      return true;
    }
  
  }