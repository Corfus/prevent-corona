import { GameState } from '../GameState';
import { CountryEntity } from '../CountryState';
import { LocalEvent } from '../GameEvent';
import { EventMessage } from '../GameEvent';
import { GameEventEntity } from '../GameEvent';

export const ScientistsDieEntity: GameEventEntity = 'ScientistsDie';

// Balancing
export const OccursAboveMedicineChange: number = .5;
export const ProbabilityAboveMedicineChange: number = .1;
export const ProbabilityUnderMedicineChange: number = .03;
export const HappinessChange: number = -10000;
export const MedicineChangeMultiplier: number = .7;
export const VaccinesChangeMultiplier: number = .7;

export class ScientistsDieEvent extends LocalEvent {
  getLocalOccurenceProbability(state: GameState, countryEntity: string): number {
    const country = state.getCountry(countryEntity);
    const medicineChangeRate: number = country.medicine.absoluteRateOfChange;
    const vaccinesChangeRate: number = country.vaccines.absoluteRateOfChange;
    return (medicineChangeRate > OccursAboveMedicineChange) ?
      ProbabilityAboveMedicineChange : ProbabilityUnderMedicineChange;
  }

  occurLocally(state: GameState, countryEntity: CountryEntity): void {
    const country = state.getCountry(countryEntity);
    country.happiness.value += HappinessChange;
    country.medicine.absoluteRateOfChange *= MedicineChangeMultiplier;
    country.vaccines.absoluteRateOfChange *= VaccinesChangeMultiplier;
    state.addEventMessage(new EventMessage(ScientistsDieEntity, countryEntity));
  }
}