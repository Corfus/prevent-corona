import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const StockMarketRecoveryEntity: GameEventEntity = 'StockMarketRecovery';

export class StockMarketRecoveryEvent extends LocalEvent {

  // Balancing
  private OccursUnderInfectedNumber = 100;
  private ProbabilityUnder = .05;
  private ProbabilityAbove = 0;
  private MoneyChangeAbsolute = 50000;

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected < this.OccursUnderInfectedNumber) ?
      this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    state.addEventMessage(StockMarketRecoveryEntity, countryEntity);
  }
}
