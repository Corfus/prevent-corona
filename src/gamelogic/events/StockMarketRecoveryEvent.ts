import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {EventMessage} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const StockMarketRecoveryEntity: GameEventEntity = 'StockMarketRecovery';

export class StockMarketRecoveryEvent extends LocalEvent {

  // Balancing
  private OccursUnderInfectedNumber: number = 100;
  private ProbabilityUnder: number = .05;
  private ProbabilityAbove: number = 0;
  private MoneyChangeAbsolute: number = 50000;

  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
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
