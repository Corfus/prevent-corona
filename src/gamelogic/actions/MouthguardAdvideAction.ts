import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';
import {GameEventEntity} from '../GameEvent';

export const MouthguardAdvideEntity: GameEventEntity = 'MouthguardAdvide';

export class MouthguardAdvideAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute: number = -100000000;
  private HappinessChangeAbsolute: number = 5;
  private AcceptanceChangeAbsolute: number = -5;

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
