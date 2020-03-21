import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {LocalEvent} from '../GameEvent';
import {GameEventEntity} from '../GameEvent';

export const ChinaSackOfRiseEntity: GameEventEntity = 'ChinaSackOfRise';

export class ChinaSackOfRiseHarmlessEvent extends LocalEvent {

  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    return 1;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    state.addEventMessage(ChinaSackOfRiseEntity, countryEntity);
  }
}
