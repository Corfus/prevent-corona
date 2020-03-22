import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';
import {GameEventEntity} from '../GameEvent';

export const KeepDistanceAdviceEntity: GameEventEntity = 'KeepDistanceAdvice';

export class KeepDistanceAdviceAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute: number = -10000;
  private HappinessChangeRateAbsolut: number = -.1;
  private NumberOfInfectedChangeRelative: number = -.015;

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
