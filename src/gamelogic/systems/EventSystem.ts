import {System} from '../System';
import {GameState} from '../GameState';

export class EventSystem extends System {

  private rng: any; // TODO typing

  // Dependency injection für den RNG um testbar zu machen (brauchen wir das?)
  constructor(rng?: any) {
    super();
    if (rng === undefined) {
      rng = () => Math.random();
    }
    this.rng = rng;
  }

  public applyTick(state: GameState): void {
    state.getAllEvents().forEach((gameEvent, _) => {
      const probability = gameEvent.getOccurenceProbability(state);
      if (Math.random() < probability) {
        gameEvent.occur(state);
      }
    });
  }

}
