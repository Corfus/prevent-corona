import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {ClosedBorderPolicy} from './Policies/ClosedBorderPolicy';
import {GameAction, GameActionEntity} from './GameAction';
import {PropagandaAction} from './Actions/PropagandaAction';
import {GameEvent, GameEventEntity} from './GameEvent';
import {CoronaPartyEntity, CoronaPartyEvent} from './Events/CoronaPartyEvent';
import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';
import {System} from './System';
import {InfectionSystem} from './systems/InfectionSystem';
import {EventSystem} from './EventSystem';

export class GameCreator {
  constructor() {
  }

  public static createGameState(): GameState {
        const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
        const propaganda: GameActionEntity = 'Propaganda';
        const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
        const Events: Map<GameEventEntity, GameEvent> = new Map();
        const germanyEntity: CountryEntity = 'Germany';
        const germany = new CountryState();
        germany.numberOfInfected.relativeRateOfChange = 1.2;
        germany.numberOfInfected.value = 0;
        const chinaEntity: CountryEntity = 'China';
        const china = new CountryState();
        china.numberOfInfected.relativeRateOfChange = 1.1;
        china.numberOfInfected.value = 0;
        const Countries: Map<CountryEntity, CountryState> = new Map([[germanyEntity, germany], [chinaEntity, china]]);

        return new GameState(Countries, Policies, Actions, Events);
  }

}
