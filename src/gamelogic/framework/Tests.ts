import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {ClosedBorderPolicy} from './Policies/ClosedBorder';
import {GameAction, GameActionEntity} from './GameAction';
import {PropagandaAction} from './Actions/Propaganda';
import {GameEvent, GameEventEntity} from './GameEvent';
import {CoronaPartyEntity, CoronaPartyEvent} from './Events/CoronaParty';
import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';
import {GameRunner} from './GameRunner';
import {EventSystem} from '../systems/EventSystem';
import {InfectionSystem} from './systems/InfectionSystem';

/**
 * Testframework ist zu lange her. Alles vergessen xD
 * quick and dirty:
 *    tsc --init um tsconfig zu generieren
 *    tests ausführen mit tsc && node Tests.js
 */

function testAction() {
  const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
  const propaganda: GameActionEntity = 'Propaganda';
  const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
  const Events: Map<GameEventEntity, GameEvent> = new Map();
  const germany: CountryEntity = 'Germany';
  const Countries: Map<CountryEntity, CountryState> = new Map([[germany, new CountryState()]]);
  const gameState = new GameState(Countries, Policies, Actions, Events);
  console.log(gameState.getCountry(germany));
  console.log('created gameState');
  console.log(gameState.runAction(germany, propaganda));
  console.log(gameState.getCountry(germany));
}


function testRunner() {
  const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
  const propaganda: GameActionEntity = 'Propaganda';
  const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
  const Events: Map<GameEventEntity, GameEvent> = new Map();
  const germanyEntity: CountryEntity = 'Germany';
  const germany = new CountryState();
  germany.numberOfInfected.relativeRateOfChange = 1.2;
  germany.numberOfInfected.value = 0; // ein Infizierter

  const chinaEntity: CountryEntity = 'China';
  const china = new CountryState();
  china.numberOfInfected.relativeRateOfChange = 1.1;
  china.numberOfInfected.value = 0; // ein Infizierter
  const Countries: Map<CountryEntity, CountryState> = new Map([[germanyEntity, germany], [chinaEntity, china]]);
  const gameState = new GameState(Countries, Policies, Actions, Events);
  const gameRunner = new GameRunner(gameState);
  const infectionSystem = new InfectionSystem(.3);
  gameRunner.AddSystem(infectionSystem);
  console.log(gameState.getCountry(chinaEntity));
  for (let i = 0; i < 10; i++) {
    gameRunner.Tick();
  }
  console.log(gameState.getCountry(chinaEntity));
  console.log(gameState);
}

function testCoronaParty() {
  const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
  const propaganda: GameActionEntity = 'Propaganda';
  const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
  const Events: Map<GameEventEntity, GameEvent> = new Map([[CoronaPartyEntity, new CoronaPartyEvent()]]);
  const chinaEntity: CountryEntity = 'China';
  const china = new CountryState();
  china.numberOfInfected.relativeRateOfChange = 1.1;
  china.numberOfInfected.value = 110;
  const Countries: Map<CountryEntity, CountryState> = new Map([[chinaEntity, china]]);
  const gameState = new GameState(Countries, Policies, Actions, Events);
  const gameRunner = new GameRunner(gameState);
  // const infectionSystem = new InfectionSystem(.3);
  // gameRunner.AddSystem(infectionSystem);
  const eventSystem = new EventSystem();
  gameRunner.AddSystem(eventSystem);
  console.log(gameState.getCountry(chinaEntity));
  for (let i = 0; i < 10; i++) {
    gameRunner.Tick();
  }
  console.log(gameState.getCountry(chinaEntity));
  console.log(gameState.getEventMessageHistory());
}

function testPolicy() {
  const closedBorders: GamePolicyEntity = 'closedBorders';
  const Policies: Map<GamePolicyEntity, GamePolicy> = new Map([[closedBorders, new ClosedBorderPolicy()]]);
  const propaganda: GameActionEntity = 'Propaganda';
  const Actions: Map<GameActionEntity, GameAction> = new Map([[propaganda, new PropagandaAction()]]);
  const Events: Map<GameEventEntity, GameEvent> = new Map();
  const germany: CountryEntity = 'Germany';
  const Countries: Map<CountryEntity, CountryState> = new Map([[germany, new CountryState()]]);
  const gameState = new GameState(Countries, Policies, Actions, Events);
  console.log(gameState.getCountry(germany));
  console.log('created gameState');
  console.log(gameState.enactPolicy(germany, closedBorders));
  console.log(gameState.getCountry(germany));
}

testAction();
testRunner();
testCoronaParty();
testPolicy();
