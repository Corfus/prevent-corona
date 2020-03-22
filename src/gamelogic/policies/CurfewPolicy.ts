import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class CurfewPolicy extends GamePolicy {

  private HappinessChangeRate: number = -10;
  private MoneyChangeRate: number = -0.01;
  private InfectedChangeRate: number = -0.03;

  isEnactable(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    return country.acceptance.value > 10;
  }

  isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
    return this.isEnacted;
  }

  onEnact(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.happiness.absoluteRateOfChange += this.HappinessChangeRate;
    country.money.relativeRateOfChange += this.MoneyChangeRate;
    country.numberOfInfected.relativeRateOfChange += this.InfectedChangeRate;
    this.isEnacted = true;
    return true;
  }

  onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.happiness.absoluteRateOfChange -= this.HappinessChangeRate;
    country.money.relativeRateOfChange -= this.MoneyChangeRate;
    country.numberOfInfected.relativeRateOfChange -= this.InfectedChangeRate;
    this.isEnacted = false;
    return true;
  }

  applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
    return true;
  }

}
