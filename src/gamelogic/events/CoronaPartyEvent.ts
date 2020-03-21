import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {EventMessage} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const CoronaPartyEntity: GameEventEntity = 'Coronaparty';

export class CoronaPartyEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber: number = 100;
  private ProbabilityAbove: number = .1;
  private ProbabilityUnder: number = .03;
  private NumberOfInfectedChangeAbsolute: number = 100;

  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
                this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.numberOfInfected.value += this.NumberOfInfectedChangeAbsolute;
    state.addEventMessage(CoronaPartyEntity, countryEntity);
  }
}