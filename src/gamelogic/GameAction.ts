import {GameState} from './GameState';
import {CountryEntity} from './CountryState';

export type GameActionEntity = string;

/**
 * eine Aktion die ein Land ausführen kann.
 * um eine konkrete Aktion zu definieren Unterklasse von GameAction erstellen
 */
export abstract class GameAction {
  abstract isActionable(state: GameState, country: CountryEntity): boolean;

  abstract run(state: GameState, country: CountryEntity): void;
}



