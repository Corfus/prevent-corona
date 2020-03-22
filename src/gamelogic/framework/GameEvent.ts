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
  public abstract getOccurrenceProbability(state: GameState): number;

  /**
   * das Ereignis tritt ein und mutiert! den Zustand des Spiels
   * @param state Zustand des Spiels
   */
  public abstract occur(state: GameState): void;

}

export abstract class LocalEvent extends GameEvent {
  private occurredIn: any;

  constructor() {
    super();
    this.occurredIn = [];
  }

  abstract occurLocally(state: GameState, countryEntity: CountryEntity): void;

  abstract getLocalOccurrenceProbability(state: GameState, countryEntity: CountryEntity): number;

  getOccurrenceProbability(state: GameState): number {
    return 1;
  }

  occur(state: GameState): void {
    state.getAllCountryEntities().forEach((entity) => {
      const probability = this.getLocalOccurrenceProbability(state, entity);
      if ((Math.random() < probability) && (this.occurredIn.indexOf(entity) === -1)) {
        this.occurLocally(state, entity);
        this.occurredIn.push(entity);
      }
    });
  }
}


