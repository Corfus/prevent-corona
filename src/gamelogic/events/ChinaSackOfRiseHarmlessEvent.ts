import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const ChinaSackOfRiseEntity: GameEventEntity = 'ChinaSackOfRise';

export class ChinaSackOfRiseHarmlessEvent extends LocalEvent {

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    return 1;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    state.addEventMessage(ChinaSackOfRiseEntity, countryEntity);
  }
}
