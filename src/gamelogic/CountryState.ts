export type CountryEntity = string;

export const GlobalEntity: CountryEntity = 'GLOBAL';
// ist die Rate relativ oder absolut?
// brauchen wir überall Rate oder gibt es direktere Möglichkeit?


export class RateAttribute {
  value: number;
  relativeRateOfChange: number;
  absoluteRateOfChange: number;

  constructor(value = 0, relativeRateOfChange = 1, absoluteRateOfChange = 0) {
    this.value = value;
    this.relativeRateOfChange = relativeRateOfChange;
    this.absoluteRateOfChange = absoluteRateOfChange;
  }
}


export class CountryState {
  public happiness: RateAttribute;          // 0 - 100        Start: 50
  public money: RateAttribute;              // 0 - 50.000.000.000.000
  public acceptance: RateAttribute;         // 0 - 100        Start: 0
  public totalPopulation: RateAttribute;    // 0 - ...        Start: 82.000.000
  public numberOfInfected: RateAttribute;   // 0 - 82.000.000 Start: 0
  public numberOfRecovered: RateAttribute;  // 0 - 82.000.000 Start: 0
  public deathProbability: RateAttribute;   // 0 - TODO
  public recoverProbability: RateAttribute; // 0 - TODO
  public deaths: number;                    // 0 - 82.000.000
  public vaccines: RateAttribute;           // 0 - 100
  public medicine: RateAttribute;           // 0 - 100
  public hospitalCapacity: number;

  constructor() {
    this.happiness = new RateAttribute(50);
    this.money = new RateAttribute(5000000000);
    this.acceptance = new RateAttribute(0);
    this.totalPopulation = new RateAttribute(82000000);
    this.numberOfInfected = new RateAttribute();
    this.numberOfRecovered = new RateAttribute();
    this.deathProbability = new RateAttribute(0.005);
    this.recoverProbability = new RateAttribute(0.005);
    this.deaths = 0;
    this.hospitalCapacity = 100000;
    this.vaccines = new RateAttribute();
    this.medicine = new RateAttribute();
  }
}

