import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GamePolicy} from '../framework/GamePolicy';


export class ExpandHospitalBedsPolicy extends GamePolicy {

  private HospitalCapacityChange = 5000;
  private BuildCosts = -1000000;
  private MoneyChangeRate = -0.01;

  isEnactable(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    return country.hospitalCapacity > country.hospitalCapacityStartValue;
  }

  isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
    return this.isEnacted;
  }

  onEnact(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.hospitalCapacity += this.HospitalCapacityChange;
    country.money.value += this.BuildCosts;
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
