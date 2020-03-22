import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GameEventEntity, LocalEvent} from '../framework/GameEvent';

export const ScientistsDieEntity: GameEventEntity = 'ScientistsDie';

export class ScientistsDieEvent extends LocalEvent {

  // Balancing
  private OccursAboveMedicineChange = .5;
  private ProbabilityAbove = .1;
  private ProbabilityUnder = .03;
  private HappinessChangeAbsolute = -1;
  private MedicineChangeMultiplier = .7;
  private VaccinesChangeMultiplier = .7;

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
