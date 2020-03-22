import {System} from '../System';
import {GameState} from '../GameState';
import {CountryEntity, CountryState} from '../CountryState';

export class EvolutionSystem extends System {
  private happinessDeathsFactor: number;
  private happinessInfectedFactor: number;
  private acceptanceDeathsFactor: number;
  private acceptanceInfectedFactor: number;
  private deathHospitalFullAddend: number;
  private daysToRecoverOrDie: number;
  private infectedAt: any;

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
    this.deathHospitalFullAddend = 0.02;
    this.daysToRecoverOrDie = 1;
    this.infectedAt = [];
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
      var acceptanceRateOfChange = countryData.numberOfInfected.value * this.acceptanceInfectedFactor;
      acceptanceRateOfChange += countryData.deaths * this.acceptanceDeathsFactor;
      countryData.acceptance.value += acceptanceRateOfChange;

      //infizierte 
      //Begrenztes logistisches Wachstum: https://de.wikipedia.org/wiki/Logistische_Funktion
      var k = countryData.numberOfInfected.relativeRateOfChange / state.ticksPerDay;
      var lastInfected = countryData.numberOfInfected.value;
      var total = countryData.totalPopulation.value;
      //countryData.numberOfInfected.value = (total) / (1+Math.exp(-k*total*state.tickCount)*(total/100-1));
      countryData.numberOfInfected.value = (total * lastInfected) / (lastInfected + (total - lastInfected) * Math.exp(-k*total) );
      if(this.infectedAt[countryEntity] == undefined)
      {
        this.infectedAt[countryEntity] = [];
      }
      this.infectedAt[countryEntity].push(countryData.numberOfInfected.value - lastInfected);
      //countryData.numberOfInfected.relativeRateOfChange *= 1;

      //Krankenhauskapazität
      if(countryData.numberOfInfected.value > countryData.hospitalCapacity)
      {
        newDeaths += (countryData.numberOfInfected.value - countryData.hospitalCapacity) * this.deathHospitalFullAddend;
      }
      

      //recovered + deaths
      var lastIndex = (state.tickCount - this.daysToRecoverOrDie * state.ticksPerDay);
      if(lastIndex >= 0)
      {
        var infectedToHandle = this.infectedAt[countryEntity][state.tickCount - this.daysToRecoverOrDie * state.ticksPerDay];
        var hospitalOverfull = countryData.numberOfInfected.value > countryData.hospitalCapacity;
        var medicineResearched = countryData.medicine.value > 100;
        var deathProbability = (medicineResearched?0:countryData.deathProbability.value) + (hospitalOverfull?this.deathHospitalFullAddend:0);

        countryData.deaths += infectedToHandle * deathProbability;
        countryData.numberOfRecovered.value += infectedToHandle * (1 - deathProbability);
        countryData.currentlyInfected = countryData.numberOfInfected.value - countryData.deaths - countryData.numberOfRecovered.value;
      }

      var newRecovered = countryData.recoverProbability.value * countryData.numberOfInfected.value;
      //countryData.numberOfRecovered.value += newRecovered;
      //countryData.numberOfInfected.value -= newRecovered;

      //Impfstoff
      countryData.vaccines.value += countryData.vaccines.absoluteRateOfChange;

      //Medizin
      countryData.medicine.value += countryData.medicine.absoluteRateOfChange;

      //Tote
      var newDeaths = 0;

      
      //newDeaths +=  countryData.deathProbability.value * countryData.numberOfInfected.value;
      //countryData.deaths += newDeaths;
      //countryData.numberOfInfected.value -= newDeaths;



    });
  }

}
