import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameAction} from '../framework/GameAction';
import {GameEventEntity} from '../framework/GameEvent';

export const KeepDistanceAdviceEntity: GameEventEntity = 'KeepDistanceAdvice';

export class KeepDistanceAdviceAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute = -100000000;
  private HappinessChangeRateAbsolut = -0.2;
  private NumberOfInfectedChangeRelative = -0.0000000005;

  isActionable(state: GameState, country: CountryEntity): boolean {
    return true;
  }

  run(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    country.happiness.absoluteRateOfChange += this.HappinessChangeRateAbsolut;
    country.numberOfInfected.relativeRateOfChange += this.NumberOfInfectedChangeRelative;
  }
}
