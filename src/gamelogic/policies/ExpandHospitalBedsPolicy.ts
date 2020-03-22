import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class ExpandHospitalBedsPolicy extends GamePolicy {
  private HospitalCapacityChange : number = 5000;
  private MoneyChangeRate  : number = -0.05;
    isEnactable(state: GameState, countryEntity: CountryEntity): boolean
    {
      const country = state.getCountry(countryEntity);
      if (country.hospitalCapacity > 10000) // Use the hospital capacity start value here
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
      country.hospitalCapacity += this.HospitalCapacityChange;
      country.money.relativeRateOfChange += this.MoneyChangeRate;
      this.isEnacted = true;
      return true;
    }

    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.hospitalCapacity -= this.HospitalCapacityChange;
      country.money.relativeRateOfChange -= this.MoneyChangeRate;
      this.isEnacted = false;
      return true;
    }

    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
      return true;
    }

  }
