import {GameState, tick} from './GameState';
import {CountryEntity} from './CountryState';

export type GameEventEntity = string;


/**
 * ein Ereignis welches eintreten kann
 * um ein konkretes Ereignis zu definieren Unterklasse von GameEvent erstellen
 */

export class EventMessage {
  eventEntity: GameEventEntity;
  locationEntity: CountryEntity;
  tickNumber: tick;

  constructor(event: GameEventEntity, location: CountryEntity, tickNumber: tick) {
    this.eventEntity = event;
    this.locationEntity = location;
    this.tickNumber = tickNumber;
  }
}

export abstract class GameEvent {

  /**
   * die Wahrscheinlichkeit, dass das Ereignis eintritt gegeben den momentanen Zustand
   */
  public abstract getOccurenceProbability(state: GameState): number;

  /**
   * das Ereignis tritt ein und mutiert! den Zustand des Spiels
   * @param state Zustand des Spiels
   */
  public abstract occur(state: GameState): void;

}

export abstract class LocalEvent extends GameEvent {
  getOccurrenceProbability(_: GameState): number {
    return 0;
  }

  abstract occurLocally(state: GameState, countryEntity: CountryEntity): void;

  abstract getLocalOccurenceProbability(state: GameState, countryEntity: CountryEntity): number;

  getOccurenceProbability(state: GameState): number {
    return 1;
  }

  occur(state: GameState): void {
    state.getAllCountryEntities().forEach((entity) => {
      const probability = this.getLocalOccurenceProbability(state, entity);
      if (Math.random() < probability) {
        this.occurLocally(state, entity);
      }
    });
  }
}


