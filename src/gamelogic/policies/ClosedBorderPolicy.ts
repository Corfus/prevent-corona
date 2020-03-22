import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GamePolicy} from '../framework/GamePolicy';

export class ClosedBorderPolicy extends GamePolicy {
  private HappinessChangeRate = -10;
  private MoneyChangeRate = -0.01;
  private InfectedChangeRate = -0.03;


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
