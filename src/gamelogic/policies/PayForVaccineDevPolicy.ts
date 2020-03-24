import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GamePolicy} from '../framework/GamePolicy';


export class PayForVaccineDevPolicy extends GamePolicy {
  private VaccineChangeRate: number = 0.7;
  private MoneyChangeRate: number = -100000;
  private InfectedChangeRate: number = -180E-11;

  isEnactable(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    return country.vaccines.value < 100 && country.acceptance.value > 10;
  }

  isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
    return this.isEnacted;
  }

  onEnact(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.money.absoluteRateOfChange += this.MoneyChangeRate;
    country.vaccines.absoluteRateOfChange = this.VaccineChangeRate;
    this.isEnacted = true;
    return true;
  }

  onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.money.absoluteRateOfChange -= this.MoneyChangeRate;
    country.vaccines.absoluteRateOfChange = 0;
    this.isEnacted = false;
    return true;
  }

  applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    if (country.vaccines.value >= 100) {
      state.revokePolicy(countryEntity, 'PayForVaccineDev');
      country.numberOfInfected.relativeRateOfChange += this.InfectedChangeRate;
    }
    return true;
  }

}
