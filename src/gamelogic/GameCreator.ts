import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {GameAction, GameActionEntity, PropagandaAction} from './GameAction';
import {GameEvent, GameEventEntity} from './GameEvent';
import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';

export class GameCreator {
  constructor() {
  }

  public static createGameState(): GameState {
    const playerEntity: CountryEntity = 'Germany';
    const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
    const propaganda: GameActionEntity = 'Propaganda';
    const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
    const Events: Map<GameEventEntity, GameEvent> = new Map();
    const playerCountry = new CountryState();
    playerCountry.numberOfInfected.relativeRateOfChange = 1.2;
    playerCountry.numberOfInfected.value = 0;
    const chinaEntity: CountryEntity = 'China';
    const china = new CountryState();
    china.numberOfInfected.relativeRateOfChange = 1.1;
    china.numberOfInfected.value = 0;
    const Countries: Map<CountryEntity, CountryState> = new Map([[playerEntity, playerCountry], [chinaEntity, china]]);

    return new GameState(Countries, Policies, Actions, Events, playerEntity);
  }

}
