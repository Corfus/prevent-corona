import {System} from '../System';
import {GameState} from '../GameState';
import {CountryEntity, CountryState} from '../CountryState';
import { tick } from '@angular/core/testing';

export class EvolutionSystem extends System {
  private happinessDeathsFactor: number;
  private happinessInfectedFactor: number;
  private happinessCuredFactor: number;
  private acceptanceDeathsFactor: number;
  private acceptanceInfectedFactor: number;
  private deathHospitalFullAddend: number;
  private daysToRecoverOrDie: number;

  private 
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

    this.happinessDeathsFactor = -0.0001;
    this.happinessInfectedFactor = -0.00001;
    this.happinessCuredFactor = 0.00003;
    this.acceptanceDeathsFactor = 0.00003;
    this.acceptanceInfectedFactor = 0.00001;
    this.deathHospitalFullAddend = 0.02;
    this.daysToRecoverOrDie = 3;
    this.infectedAt = [];
  }


  public applyTick(state: GameState): void {
    

    const countries = state.getAllCountryEntities();
    countries.forEach((countryEntity) => {
      const countryData = state.getCountry(countryEntity);

      //Staatskapital
      countryData.money.value += countryData.money.absoluteRateOfChange;

      //infizierte 
      //Begrenztes logistisches Wachstum: https://de.wikipedia.org/wiki/Logistische_Funktion
      var k = countryData.numberOfInfected.relativeRateOfChange / state.ticksPerDay;
      var lastInfected = countryData.numberOfInfected.value;
      var total = countryData.totalPopulation.value;
      //countryData.numberOfInfected.value = (total) / (1+Math.exp(-k*total*state.tickCount)*(total/100-1));
      countryData.numberOfInfected.value = (total * lastInfected) / (lastInfected + (total - lastInfected) * Math.exp(-k*total) );
      if(this.infectedAt[countryEntity] == undefined)
      {
        this.infectedAt[countryEntity] = [1];
      }      
      var infectedThisTick = countryData.numberOfInfected.value - lastInfected
      this.infectedAt[countryEntity].push(infectedThisTick);
      //countryData.numberOfInfected.relativeRateOfChange *= 1;
      

      //recovered + deaths
      var lastIndex = (state.tickCount - this.daysToRecoverOrDie * state.ticksPerDay);
      var diedThisTick = 0;
      var curedThisTick = 0;
      if(lastIndex >= 0)
      {
        var infectedToHandle = this.infectedAt[countryEntity][state.tickCount - this.daysToRecoverOrDie * state.ticksPerDay];
        var hospitalOverfull = countryData.numberOfInfected.value > countryData.hospitalCapacity;
        var medicineResearched = countryData.medicine.value >= 100;
        var deathProbability = (medicineResearched?0:countryData.deathProbability.value) + (hospitalOverfull?this.deathHospitalFullAddend:0);
        diedThisTick =  infectedToHandle * deathProbability;
        curedThisTick = infectedToHandle * (1 - deathProbability);

        countryData.deaths += diedThisTick;
        countryData.numberOfRecovered.value += curedThisTick;
        countryData.currentlyInfected = countryData.numberOfInfected.value - countryData.deaths - countryData.numberOfRecovered.value;
      }
      else{
        countryData.currentlyInfected = countryData.numberOfInfected.value;
      }


      //Zufriedenheit
      //var happinessRateOfChange = this.happinessDeathsFactor * diedThisTick;
      //happinessRateOfChange += this.happinessInfectedFactor * infectedThisTick;
      //happinessRateOfChange += this.happinessCuredFactor * curedThisTick;
      //happinessRateOfChange += countryData.happiness.absoluteRateOfChange;
      //countryData.happiness.value += happinessRateOfChange;
      countryData.happiness.value += countryData.happiness.absoluteRateOfChange;

      //Akzeptanz
      //var acceptanceRateOfChange = infectedThisTick * this.acceptanceInfectedFactor;
      //acceptanceRateOfChange += diedThisTick * this.acceptanceDeathsFactor;
      //countryData.acceptance.value += acceptanceRateOfChange;
      countryData.acceptance.value += countryData.acceptance.absoluteRateOfChange;


      //Impfstoff
      countryData.vaccines.value += countryData.vaccines.absoluteRateOfChange;

      //Medizin
      countryData.medicine.value += countryData.medicine.absoluteRateOfChange;

      //Endgame
      if(countryEntity == state.playerCountry)
      {
        if(countryData.currentlyInfected <= 0 || countryData.happiness.value <= 0 || countryData.money.value <= 0)
        {
          state.gameOver = true;
        }
      }
    });
  }

}
