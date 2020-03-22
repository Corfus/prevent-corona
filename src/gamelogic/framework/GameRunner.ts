import {System} from './System';
import {GameState} from './GameState';
import {GameActionEntity} from './GameAction';

export class GameRunner {
  private systems: System[];
  private state: GameState;

  constructor(initialState: GameState) {
    this.state = initialState;
    this.systems = [];
  }

  public AddSystem(system: System): void {
    this.systems.push(system);
  }

  public Tick(): void {
    if (!this.state.gameOver) {
      this.state.tickCount++;
      this.systems.forEach((v) => {
        v.applyTick(this.state);
      });
    }
  }

  public getState(): GameState {
    return this.state;
  }

  public runAction(actionEntity: GameActionEntity): boolean {
    return this.state.runAction(this.state.playerCountry, actionEntity);
  }


}
