import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const WirVsVirusHackthonEntity: GameEventEntity = 'WirVsVirusHackthon';

export class WirVsVirusHackthonEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber: number = 10000;
  private ProbabilityAbove: number = .3;
  private ProbabilityUnder: number = 0;
  private HappinessChangeAbsolute: number = 10;

  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
                this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.happiness.value += this.HappinessChangeAbsolute;
    state.addEventMessage(WirVsVirusHackthonEntity, countryEntity);
  }
}
