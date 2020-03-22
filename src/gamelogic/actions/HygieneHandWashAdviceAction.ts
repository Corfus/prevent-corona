import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameAction} from '../framework/GameAction';
import {GameEventEntity} from '../framework/GameEvent';

export const HygieneHandWashAdviceEntity: GameEventEntity = 'HygieneHandWashAdvice';

export class HygieneHandWashAdviceAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute: number = -1000000000;
  private NumberOfInfectedChangeRelative: number = -5E-11;

  isActionable(state: GameState, country: CountryEntity): boolean {
    return true;
  }

  run(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    country.numberOfInfected.relativeRateOfChange += this.NumberOfInfectedChangeRelative;
  }
}
