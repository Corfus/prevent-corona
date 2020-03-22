import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const StockMarketCrashEntity: GameEventEntity = 'StockMarketCrash';

export class StockMarketCrashEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber = 100;
  private ProbabilityAbove = .1;
  private ProbabilityUnder = .03;
  private MoneyChangeAbsolute = -10000;

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
      this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    state.addEventMessage(StockMarketCrashEntity, countryEntity);
  }
}
