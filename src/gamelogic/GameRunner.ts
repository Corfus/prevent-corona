import {System} from './System';
import {GameState} from './GameState';

export class GameRunner {
  private systems: System[];
  private state: GameState;

  constructor(initialState: GameState) {
    this.state = initialState;
    this.systems = [];
  }

  public AddSystem(system: System) {
    this.systems.push(system);
  }

  public Tick() {
    this.state.tickCount++;
    this.systems.forEach((v) => {
      v.applyTick(this.state);
    });
  }

}
