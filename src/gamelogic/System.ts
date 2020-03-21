import {GameState} from './GameState';

export abstract class System {
  abstract applyTick(state: GameState): void;
}
