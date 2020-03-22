import {System} from '../System';
import {GameState} from '../GameState';
import { GameEvent } from '../GameEvent';

export class EventSystem extends System {

  private rng: any; // TODO typing
  private nextTick: number;

  //balancing
  private meanEventDistance = 10;
  private randomEventDistance = 6;



  // Dependency injection für den RNG um testbar zu machen (brauchen wir das?)
  constructor(rng?: any) {
    super();
    if (rng === undefined) {
      rng = () => Math.random();
    }
    this.rng = rng;
    this.nextTick = 0;
  }

  public applyTick(state: GameState): void {
    if(state.tickCount < this.nextTick)
    {
      return;
    }

    //next event in 7-13 Ticks (with mean = 10 and random = 6)
    this.nextTick = state.tickCount + this.meanEventDistance - (this.randomEventDistance/2) + this.randomEventDistance*Math.random();

    state.getAllEvents().forEach((gameEvent, _) => {
      const probability = gameEvent.getOccurenceProbability(state);
      if (Math.random() < probability) {
        gameEvent.occur(state);

        //only one event per Eventcycle
        return;
      }
    });
  }

}
