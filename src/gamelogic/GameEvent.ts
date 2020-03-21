import {GameState} from './GameState';

export type GameEventEntity = string;

/**
 * ein Ereignis welches eintreten kann
 * um ein konkretes Ereignis zu definieren Unterklasse von GameEvent erstellen
 */

export abstract class GameEvent {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

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

