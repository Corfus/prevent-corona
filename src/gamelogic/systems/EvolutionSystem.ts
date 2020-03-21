import {System} from '../System';
import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';

export class EvolutionSystem extends System {
  private happinessDeathsFactor: number;
  private happinessInfectedFactor: number;
  private acceptanceDeathsFactor: number;
  private acceptanceInfectedFactor: number;
  private deathHospitalFullFactor: number;

  private rng: any; // TODO typing

  // Dependency injection für den RNG um testbar zu machen (brauchen wir das?)
  constructor(initialEvolutionProbability: number, rng?: any) {
    super();
    if (rng === undefined) {
      rng = () => Math.random();
    }
    this.rng = rng;

    //balancing Parameter
    this.happinessDeathsFactor = -0.1;
    this.happinessInfectedFactor = -0.01;
    this.acceptanceDeathsFactor = 0.01;
    this.acceptanceInfectedFactor = 0.001;
    this.deathHospitalFullFactor = 0.02;
  }


  public applyTick(state: GameState): void {
    

    const countries = state.getAllCountryEntities();
    countries.forEach((countryEntity) => {
      const countryData = state.getCountry(countryEntity);

      //Staatskapital
      countryData.money.value += countryData.money.absoluteRateOfChange;

      //Zufriedenheit
      countryData.happiness.absoluteRateOfChange += this.happinessDeathsFactor * countryData.deaths; //TODO
      countryData.happiness.absoluteRateOfChange += this.happinessInfectedFactor * countryData.numberOfInfected.value;
      countryData.happiness.value += countryData.happiness.absoluteRateOfChange;

      //Akzeptanz
      var absoluteRateOfChange = countryData.numberOfInfected.value * this.acceptanceInfectedFactor;
      absoluteRateOfChange += countryData.deaths * this.acceptanceDeathsFactor;
      countryData.acceptance.value += absoluteRateOfChange;

      //infizierte wird in das infectionSystem ausgelagert

      //Impfstoff
      countryData.vaccines.value += countryData.vaccines.absoluteRateOfChange;

      //Tote
      var newDeaths = 0;

      //Krankenhauskapazität
      if(countryData.numberOfInfected.value > countryData.hospitalCapacity)
      {
        newDeaths += (countryData.numberOfInfected.value - countryData.hospitalCapacity) * this.deathHospitalFullFactor;
      }

      newDeaths +=  countryData.deathProbability.value * countryData.numberOfInfected.value;
      countryData.deaths += newDeaths;
      countryData.numberOfInfected.value -= newDeaths;

    });
  }

}
