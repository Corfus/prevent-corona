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
  public happiness: RateAttribute;
  public money: RateAttribute;
  public acceptance: RateAttribute;
  public totalPopulation: RateAttribute;
  public numberOfInfected: RateAttribute;
  public economicOutput: RateAttribute;
  public deathProbability: RateAttribute;
  public deaths: number;
  public vaccines: RateAttribute; // limit 100%?
  public medicine: RateAttribute;

  constructor() {
    this.happiness = new RateAttribute();
    this.money = new RateAttribute();
    this.acceptance = new RateAttribute();
    this.totalPopulation = new RateAttribute();
    this.numberOfInfected = new RateAttribute();
    this.economicOutput = new RateAttribute();
    this.deathProbability = new RateAttribute();
    this.deaths = 0;
    this.vaccines = new RateAttribute();
    this.medicine = new RateAttribute();
  }


}

