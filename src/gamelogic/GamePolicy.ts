import {GameState} from './GameState';
import {CountryEntity} from './CountryState';

export type GamePolicyEntity = string;


/**
 * eine "Politik" die in einem Land aktiv sein kann (oder allgemeiner andauernde Effekte)
 * z.B. Ausgangssperre oder intensivierte Forschung nach Impfstoff
 * um eine konkrete Policy zu definieren Unterklasse von GamePolicy erstellen
 */
export abstract class GamePolicy {
  public isEnacted: boolean;

  constructor() {
    this.isEnacted = false;
  }


  /**
   * kann bei diesem Zustand des Spiels die Policy in einem Land eingeführt werden?
   * @param state Zustand des Spiels
   * @param country Land
   */
  public abstract isEnactable(state: GameState, country: CountryEntity): boolean;

  /**
   * kann bei diesem Zustand des Spiels die Policy in einem Land abgeschafft werden?
   * @param state Zustand des Spiels
   * @param country Land
   */
  public abstract isRevokable(state: GameState, country: CountryEntity): boolean;


  /**
   * wende den initialen Effekt der Policy auf ein Land an und mutiere!! den Gamestate
   * onEnact wird aufgerufen, wenn ein Land eine Policy aktiviert
   * @param state Zustand des Spiels
   * @param country Land
   */
  public abstract onEnact(state: GameState, country: CountryEntity): void;

  /**
   * wende den Effekt der Abschaffung einer Policy auf ein Land an und mutiere!! den Gamestate
   * onRevoke wird aufgerufen, wenn ein Land eine Policy deaktiviert
   * @param state Zustand des Spiels
   * @param country Land
   */
  public abstract onRevoke(state: GameState, country: CountryEntity): void;

  /**
   * wende den Effekt der Policy auf ein Land an und mutiere!! den Gamestate
   * applyEffects wird jeden! Tick aufgerufen, solange die Policy aktiv ist
   * TODO: Ist das nötig oder doppelt sich der Effekt mit onEnact/onRevoke
   * @param state Zustand des Spiels
   * @param country Land
   */
  public abstract applyEffects(state: GameState, country: CountryEntity): void;
}


export class ClosedBorderPolicy extends GamePolicy {
  isEnactable(state: GameState, country: CountryEntity): boolean {
    return !this.isEnacted;
  }

  isRevokable(state: GameState, country: CountryEntity): boolean {
    return this.isEnacted;
  }

  onEnact(state: GameState, country: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.happiness.rateOfchange -= 1;
    country.money.rateOfchange -= 1;
    country.numberOfInfected.rateOfchange -= 1;
    this.isEnacted = true;
    return true;
  }

  onRevoke(state: GameState, country: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.happiness.rateOfchange += 1;
    country.money.rateOfchange += 1;
    country.numberOfInfected.rateOfchange += 1;
    this.isEnacted = false;
    return true;
  }

  applyEffects(state: GameState, country: CountryEntity): boolean {
    return true;
  }

}
