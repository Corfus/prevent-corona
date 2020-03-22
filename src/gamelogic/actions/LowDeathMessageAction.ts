import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GameAction} from '../GameAction';
import {GameEventEntity} from '../GameEvent';

export const LowDeathMessageEntity: GameEventEntity = 'LowDeathMessage';

export class LowDeathMessageAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute: number = -10000;
  private HappinessChangeAbsolute: number = 1;

  isActionable(state: GameState, country: CountryEntity): boolean {
    return true;
  }

  run(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    country.happiness.value += this.HappinessChangeAbsolute;
  }
}
