export type CountryEntity = string;

// ist die Rate relativ oder absolut?
// brauchen wir überall Rate oder gibt es direktere Möglichkeit?
export interface RateAttribute {
  value: number;
  rateOfChange: number;
}

export class CountryState {
  public happiness: RateAttribute;
  public money: RateAttribute;
  public acceptance: RateAttribute;
  public totalPopulation: RateAttribute;
  public numberOfInfected: RateAttribute;
  public economicOutput: RateAttribute;

  // TODO sinnvoller Konstruktor
  constructor() {
    this.happiness = {
      rateOfChange: 0,
      value: 0
    };

    this.money = {
      rateOfChange: 0,
      value: 0
    };

    this.acceptance = {
      rateOfChange: 0,
      value: 0
    };

    this.totalPopulation = {
      rateOfChange: 0,
      value: 0
    };
    this.numberOfInfected = {
      rateOfChange: 0,
      value: 0
    };
    this.economicOutput = {
      rateOfChange: 0,
      value: 0
    };
  }


}

