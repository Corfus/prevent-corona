import {System} from '../framework/System';
import {GameState} from '../framework/GameState';

export class EventSystem extends System {

  private rng: any; // TODO typing
  private nextTick: number;

  // balancing
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
    const countries = state.getAllCountryEntities();
    countries.forEach((countryEntity) => {
      state.getCountryEnactedPolicies(countryEntity).forEach((gameEnactedPolicy) => {
        state.getAllPolicies().forEach((gamePolicy, policyName) => {
          if (policyName === gameEnactedPolicy) {
            gamePolicy.applyEffects(state, countryEntity);
          }
        });
      });
    });
    if (state.tickCount < this.nextTick) {
      return;
    }

    // next event in 7-13 Ticks (with mean = 10 and random = 6)
    this.nextTick = state.tickCount + this.meanEventDistance - (this.randomEventDistance / 2) + this.randomEventDistance * Math.random();

    state.getAllEvents().forEach((gameEvent, _) => {
      const probability = gameEvent.getOccurrenceProbability(state);
      if (Math.random() < probability) {
        gameEvent.occur(state);

        // only one event per event cycle
        return;
      }
    });
  }

}
