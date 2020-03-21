import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {EventMessage} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const WirVsCoronaHackthonEntity: GameEventEntity = 'WirVsCoronaHackthon';

export class WirVsCoronaHackthonEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber: number = 10000;
  private ProbabilityAbove: number = .3;
  private ProbabilityUnder: number = 0;
  private HappinessChangeAbsolute: number = 3;

  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
                this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.happiness.value += this.HappinessChangeAbsolute;
    state.addEventMessage(WirVsCoronaHackthonEntity, countryEntity);
  }
}
