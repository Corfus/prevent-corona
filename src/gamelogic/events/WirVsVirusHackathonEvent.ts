import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const WirVsVirusHackathonEntity: GameEventEntity = 'WirVsVirusHackathon';

export class WirVsVirusHackathonEvent extends LocalEvent {

  // Balancing
  private OccursAboveInfectedNumber = 10000;
  private ProbabilityAbove = .3;
  private ProbabilityUnder = 0;
  private HappinessChangeAbsolute = 3;

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > this.OccursAboveInfectedNumber) ?
      this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.happiness.value += this.HappinessChangeAbsolute;
    state.addEventMessage(WirVsVirusHackathonEntity, countryEntity);
  }
}
