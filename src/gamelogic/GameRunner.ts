import {System} from './System';
import {GameState} from './GameState';
import {GameActionEntity} from './GameAction';
import {CountryEntity} from './CountryState';

export class GameRunner {
  private systems: System[];
  private state: GameState;
  public readonly playerCountry: CountryEntity;

  constructor(initialState: GameState, playerCountry: CountryEntity) {
    this.state = initialState;
    this.systems = [];
    this.playerCountry = playerCountry;
  }

  public AddSystem(system: System): void {
    this.systems.push(system);
  }

  public Tick(): void {
    this.state.tickCount++;
    this.systems.forEach((v) => {
      v.applyTick(this.state);
    });
  }

  public getState(): GameState {
    return this.state;
  }

  public runAction(actionEntity: GameActionEntity): boolean {
    return this.state.runAction(actionEntity, this.playerCountry);
  }


}
