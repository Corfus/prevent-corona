import {GameState} from '../framework/GameState';
import {CountryEntity} from '../framework/CountryState';
import {GamePolicy} from '../framework/GamePolicy';


export class BuildEmergencyHospitalPolicy extends GamePolicy {

  private HospitalCapacityChange : number = 10000;
  private BuildCosts: number = -100000000;
  private MoneyChangeRate  : number = -10000;

  private readonly expandHospitalBedsPolicyEntity: string;

  constructor(expandHospitalBedsPolicyEntity: string) {
    super();
    this.expandHospitalBedsPolicyEntity = expandHospitalBedsPolicyEntity;
  }

  isEnactable(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    return country.hospitalCapacity === country.hospitalCapacityStartValue;
  }

  isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
    return this.isEnacted;
  }

  onEnact(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.hospitalCapacity += this.HospitalCapacityChange;
    country.money.value += this.BuildCosts;
    country.money.relativeRateOfChange += this.MoneyChangeRate;
    this.isEnacted = true;
    return true;
  }

  onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
    const country = state.getCountry(countryEntity);
    country.hospitalCapacity -= this.HospitalCapacityChange;
    country.money.relativeRateOfChange -= this.MoneyChangeRate;
    state.revokePolicy(countryEntity, this.expandHospitalBedsPolicyEntity);
    this.isEnacted = false;
    return true;
  }

  applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
    return true;
  }

}
