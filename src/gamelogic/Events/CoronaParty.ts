import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {EventMessage} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const CoronaPartyEntity: GameEventEntity = 'Coronaparty';

export class CoronaPartyEvent extends LocalEvent {
  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const numOfInfected: number = country.numberOfInfected.value;
    return (numOfInfected > 100) ? .6 : .0; // TODO magic number probability too high
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.numberOfInfected.value += 100; // TODO magic number
    state.addEventMessage(new EventMessage(CoronaPartyEntity, countryEntity));
  }

}