import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';
import {GameEventEntity} from '../GameEvent';

export const HygieneHandWashAdviceEntity: GameEventEntity = 'HygieneHandWashAdvice';

export class HygieneHandWashAdviceAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute: number = -10000;
  private NumberOfInfectedChangeRelative: number = -.01;

    isActionable(state: GameState, country: CountryEntity): boolean {
      return true;
    }

    run(state: GameState, countryEntity: CountryEntity): void {
      const country = state.getCountry(countryEntity);
      country.money.value += this.MoneyChangeAbsolute;
      country.numberOfInfected.relativeRateOfChange += this.NumberOfInfectedChangeRelative;
    }
  }