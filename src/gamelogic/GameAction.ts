import {GameState} from './GameState';
import {CountryEntity} from './CountryState';
import {GamePolicyEntity} from './GamePolicy';

export type GameActionEntity = string;

/**
 * eine Aktion die ein Land ausführen kann.
 * um eine konkrete Aktion zu definieren Unterklasse von GameAction erstellen
 */
export abstract class GameAction {
  abstract isActionable(state: GameState, country: CountryEntity): boolean;

  abstract run(state: GameState, country: CountryEntity): void;
}

export class EnactPolicyAction extends GameAction {
  public readonly policyEntity: GamePolicyEntity;

  constructor(policyEntity: GamePolicyEntity) {
    super();
    this.policyEntity = policyEntity;
  }

  isActionable(state: GameState, country: CountryEntity): boolean {
    return state.policyIsEnactable(country, this.policyEntity);
  }

  run(state: GameState, country: CountryEntity): void {
    state.enactPolicy(country, this.policyEntity); // TODO error handling
  }

}

export class RevokePolicyAction extends GameAction {
  public readonly policyEntity: GamePolicyEntity;

  constructor(policyEntity: GamePolicyEntity) {
    super();
    this.policyEntity = policyEntity;
  }

  isActionable(state: GameState, country: CountryEntity): boolean {
    return state.policyIsRevokable(country, this.policyEntity);
  }

  run(state: GameState, country: CountryEntity): void {
    state.revokePolicy(country, this.policyEntity); // TODO error handling
  }

}

export interface PolicyActionPair {
  enact: EnactPolicyAction;
  enactEntity: GameActionEntity;
  revoke: RevokePolicyAction;
  revokeEntity: GameActionEntity;
}

export function generatePolicyActions(policyEntity: GamePolicyEntity): PolicyActionPair {
  return {
    enact: new EnactPolicyAction(policyEntity),
    enactEntity: `enact${policyEntity}`,
    revoke: new RevokePolicyAction(policyEntity),
    revokeEntity: `revoke${policyEntity}`,
  };
}
