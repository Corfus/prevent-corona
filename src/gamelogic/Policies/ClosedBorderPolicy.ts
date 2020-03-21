import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';

//Balancing
export const HappinessChangeRate : number = 10;
export const MoneyChangeRate  : number = 0.01;
export const InfectedChangeRate : number = 0.03;

export class ClosedBorderPolicy extends GamePolicy {
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
      country.happiness.absoluteRateOfChange -= HappinessChangeRate;
      country.money.absoluteRateOfChange -= MoneyChangeRate;
      country.numberOfInfected.relativeRateOfChange -= InfectedChangeRate;
      this.isEnacted = true;
      return true;
    }
  
    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.happiness.absoluteRateOfChange += HappinessChangeRate;
      country.money.absoluteRateOfChange += MoneyChangeRate;
      country.numberOfInfected.relativeRateOfChange += InfectedChangeRate;
      this.isEnacted = false;
      return true;
    }
  
    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
      return true;
    }
  
  }