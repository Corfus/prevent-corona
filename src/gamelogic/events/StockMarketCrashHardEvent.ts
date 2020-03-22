import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const StockMarketCrashHardEntity: GameEventEntity = 'StockMarketCrashHard';

export class StockMarketCrashHardEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber = 1000;
  private ProbabilityAbove = .1;
  private ProbabilityUnder = .03;
  private MoneyChangeAbsolute = -100000;

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
      this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    state.addEventMessage(StockMarketCrashHardEntity, countryEntity);
  }
}
