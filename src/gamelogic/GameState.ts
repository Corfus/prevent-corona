import {CountryEntity, CountryState} from './CountryState';
import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {GameAction, GameActionEntity} from './GameAction';
import {EventMessage, GameEvent, GameEventEntity} from './GameEvent';

export type tick = number;

export class GameState {
  public tickCount: number;
  public ticksPerDay: number;
  public gameOver: boolean;
  public scores: Map<CountryEntity, number>;
  private countries: Map<CountryEntity, CountryState>;
  public playerCountry: CountryEntity;

  private eventMessageHistory: EventMessage[];

  private readonly allPolicies: Map<GamePolicyEntity, GamePolicy>;
  private readonly allActions: Map<GameActionEntity, GameAction>;
  private readonly allEvents: Map<GameEventEntity, GameEvent>;
  private readonly enactedPolicies: Map<CountryEntity, Set<GamePolicyEntity>>;

  constructor(countries: Map<CountryEntity, CountryState>,
              policies: Map<GamePolicyEntity, GamePolicy>,
              actions: Map<GameActionEntity, GameAction>,
              events: Map<GameEventEntity, GameEvent>,
              playerCountry: CountryEntity) {
    this.allPolicies = policies;
    this.allActions = actions;
    this.allEvents = events;
    this.countries = countries;

    this.tickCount = 0;
    this.ticksPerDay = 24;
    this.gameOver = false;
    this.playerCountry = playerCountry;
    this.eventMessageHistory = [];
    this.enactedPolicies = new Map();
    this.scores = new Map();
    countries.forEach((v, k) => {
      this.enactedPolicies.set(k, new Set());
      this.scores.set(k, 0);
    });
  }


  public getAllCountryEntities(): CountryEntity[] {
    return Array.from(this.countries.keys());
  }

  public getAllPolicies() : Map<GamePolicyEntity, GamePolicy> {
    return this.allPolicies;
  }

  public getAllEvents(): Map<GameEventEntity, GameEvent> {
    return this.allEvents;
  }

  public getEventMessageHistory(): EventMessage[] {
    return this.eventMessageHistory;
  }

  public getCountry(country: CountryEntity): CountryState {
    if (!this.countries.has(country)) {
      throw new Error(`tried to get unknown country: ${country}`);
    }
    return this.countries.get(country) as CountryState; // TODO wie richtig? X|undefined zu X
  }


  /**
   * liefert alle Policies die in einem Land momentan aktiv sind
   * @param country Land
   */
  public getCountryEnactedPolicies(country: CountryEntity): Set<GamePolicyEntity> {
    return this.enactedPolicies.get(country) as Set<GamePolicyEntity>; // TODO see above;
  }

  public policyIsEnactable(country: CountryEntity, policyEntity: GamePolicyEntity): boolean {
    if (!this.allPolicies.has(policyEntity)) {
      throw new Error(`tried to enact unknown policy ${policyEntity}`);
    }

    const policy = this.allPolicies.get(policyEntity);
    if (policy === undefined) { // TODO
      return false;
    }

    const policySet = this.enactedPolicies.get(country);
    if (policySet === undefined) { // TODO error
      return false;
    }
    const alreadyActive = policySet.has(policyEntity);
    return !alreadyActive && policy.isEnactable(this, country);
  }

  public policyIsRevokable(country: CountryEntity, policyEntity: GamePolicyEntity): boolean {
    if (!this.allPolicies.has(policyEntity)) {
      throw new Error(`tried to revoke unknown policy ${policyEntity}`);
    }

    const policy = this.allPolicies.get(policyEntity);
    if (policy === undefined) { // TODO
      return false;
    }

    const policySet = this.enactedPolicies.get(country);
    if (policySet === undefined) { // TODO error
      return false;
    }
    const alreadyActive = policySet.has(policyEntity);
    return alreadyActive && policy.isRevokable(this, country);
  }

  public enactPolicy(country: CountryEntity, policyEntity: GamePolicyEntity): boolean {

    if (!this.policyIsEnactable(country, policyEntity)) {
      return false;
    }

    const policy = this.allPolicies.get(policyEntity);
    if (policy === undefined) { // TODO
      return false;
    }

    const policySet = this.enactedPolicies.get(country);
    if (policySet === undefined) { // TODO error
      return false;
    }

    policySet.add(policyEntity);

    policy.onEnact(this, country);
    return true;
  }

  public revokePolicy(country: CountryEntity, policyEntity: GamePolicyEntity): boolean {
    if (!this.allPolicies.has(policyEntity)) {
      throw new Error(`tried to revoke unknown policy ${policyEntity}`);
    }
    const policy = this.allPolicies.get(policyEntity);

    if (policy === undefined) { // TODO
      return false;
    }
    if (!policy.isRevokable(this, country)) {
      return false;
    }
    const policySet = this.enactedPolicies.get(country);
    if (policySet === undefined) { // TODO
      return false;
    }
    policySet.delete(policyEntity);
    policy.onRevoke(this, country);
    return true;
  }

  /**
   * liefert Alle Aktionen die ein Bestimmtes Land momentan ausführen kann
   * @param country Land
   */
  public getActionableActions(country: CountryEntity) {
    const result: GameActionEntity[] = [];
    this.allActions.forEach((v, k) => {
      if (v.isActionable(this, country)) {
        result.push(k);
      }
    });
    return result;
  }

  /**
   * führt eine Aktion als ein Land aus
   * @param country Land
   * @param actionEntity Aktion
   */
  public runAction(country: CountryEntity, actionEntity: GameActionEntity): boolean {
    console.log(this.allActions);
    if (!this.allActions.has(actionEntity)) {
      throw new Error(`tried to run unknown Action ${actionEntity}`);
    }
    const action = this.allActions.get(actionEntity);
    if (action === undefined) {
      return false;
    }
    if (!action.isActionable(this, country)) {
      return false;
    }
    action.run(this, country);
    return true;
  }

  public addEventMessage(event: GameEventEntity, location: CountryEntity) {
    const message = new EventMessage(event, location, this.tickCount);
    this.eventMessageHistory.push(message);
  }
}
