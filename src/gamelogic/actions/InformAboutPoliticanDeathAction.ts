import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameAction} from '../framework/GameAction';
import {GameEventEntity} from '../framework/GameEvent';

export const InformAboutPoliticanDeathEntity: GameEventEntity = 'InformAboutPoliticanDeath';

export class InformAboutPoliticanDeathAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute = -500000000;
  private HappinessChangeAbsolute = -10;
  private AcceptanceChangeAbsolute = 10;

  isActionable(state: GameState, country: CountryEntity): boolean {
    return true;
  }

  run(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    country.happiness.value += this.HappinessChangeAbsolute;
    country.acceptance.value += this.AcceptanceChangeAbsolute;
  }
}
