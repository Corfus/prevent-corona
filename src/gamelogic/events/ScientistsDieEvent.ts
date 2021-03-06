import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const ScientistsDieEntity: GameEventEntity = 'ScientistsDie';

export class ScientistsDieEvent extends LocalEvent {

  // Balancing
  private OccursAboveMedicineChange: number = .5;
  private ProbabilityAbove: number = .1;
  private ProbabilityUnder: number = .03;
  private HappinessChangeAbsolute: number = -5;
  private MedicineChangeMultiplier: number = .7;
  private VaccinesChangeMultiplier: number = .7;

  getLocalOccurrenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const medicineChangeRate: number = country.medicine.absoluteRateOfChange;
    const vaccinesChangeRate: number = country.vaccines.absoluteRateOfChange;
    return (medicineChangeRate > this.OccursAboveMedicineChange) ?
      this.ProbabilityAbove : this.ProbabilityUnder;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.happiness.value += this.HappinessChangeAbsolute;
    country.medicine.absoluteRateOfChange *= this.MedicineChangeMultiplier;
    country.vaccines.absoluteRateOfChange *= this.VaccinesChangeMultiplier;
    state.addEventMessage(ScientistsDieEntity, countryEntity);
  }
}
