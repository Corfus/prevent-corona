import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';

export class ClosedBorderPolicy extends GamePolicy {
  private HappinessChangeRate: number = -1;
  private MoneyChangeRate: number = 50000;
  private InfectedChangeRate: number = 25E-11;


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
    country.money.absoluteRateOfChange += this.MoneyChangeRate;
    country.numberOfInfected.relativeRateOfChange += this.InfectedChangeRate;
    this.isEnacted = true;
    return true;
  }

  onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.happiness.absoluteRateOfChange -= this.HappinessChangeRate;
    country.money.absoluteRateOfChange -= this.MoneyChangeRate;
    country.numberOfInfected.relativeRateOfChange -= this.InfectedChangeRate;
    this.isEnacted = false;
    return true;
  }

  applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
    return true;
  }

}
