import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameAction} from '../framework/GameAction';
import {GameEventEntity} from '../framework/GameEvent';

export const LowDeathMessageEntity: GameEventEntity = 'LowDeathMessage';

export class LowDeathMessageAction extends GameAction {

  // Balancing
  private MoneyChangeAbsolute = -100000000;
  private HappinessChangeAbsolute = 5;

  isActionable(state: GameState, country: CountryEntity): boolean {
    return true;
  }

  run(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.money.value += this.MoneyChangeAbsolute;
    country.happiness.value += this.HappinessChangeAbsolute;
  }
}
