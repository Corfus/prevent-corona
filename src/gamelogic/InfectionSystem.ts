import {System} from './System';
import {GameState} from './GameState';
import {CountryEntity} from './CountryState';

export class InfectionSystem extends System {

  private initialInfectionDone: boolean;
  private initialInfectionProbability: number;
  private rng: any; // TODO typing

  // Dependency injection für den RNG um testbar zu machen (brauchen wir das?)
  constructor(initialInfectionProbability: number, rng?: any) {
    super();
    if (rng === undefined) {
      rng = () => Math.random();
    }
    this.rng = rng;
    this.initialInfectionDone = false;
    this.initialInfectionProbability = initialInfectionProbability;
  }

  private static infectCountry(state: GameState, countryEntity: CountryEntity): void {
    console.log(`infecting ${countryEntity}`);
    const country = state.getCountry(countryEntity);
    country.numberOfInfected.value *= country.numberOfInfected.rateOfChange;
    country.numberOfInfected.value = Math.ceil(country.numberOfInfected.value); // aufrunden weil .4234 Infizierte nicht gehen
    /** TODO sollte man eigentlich für alle CountryAttributes machen
     * also "Evolution"-System und nicht Infection System
     * ABER? ist rate of change relativ(also *)oder absolut(+)?
     */
  }

  public applyTick(state: GameState): void {
    if (!this.initialInfectionDone) {
      // schauen ob zufällig ein Virus ausbricht
      if (this.rng() < this.initialInfectionProbability) {
        const countryEntities = state.getAllCountryEntities();
        // TODO helper function?
        const initialCountryEntity = countryEntities[Math.floor(this.rng() * countryEntities.length)];
        // in diesem Land bricht der Virus aus
        const initialCountry = state.getCountry(initialCountryEntity);
        initialCountry.numberOfInfected.value = 1; // anfangs ein Infizierter
        initialCountry.numberOfInfected.rateOfChange = 1.1; // TODO sinnvoller default wert? ist das eigentlich Rate oder Faktor?
        console.log(`infected ${initialCountryEntity}`);
        this.initialInfectionDone = true;
      }

    } else {
      console.log('infection spreads');
      // Infektion verbreitet sich
      const countries = state.getAllCountryEntities();
      countries.forEach((v) => {
        InfectionSystem.infectCountry(state, v);
      });
    }
  }

}
