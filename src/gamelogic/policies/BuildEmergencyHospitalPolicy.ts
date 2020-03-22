import {GameState} from '../GameState';
import {CountryEntity} from '../CountryState';
import {GamePolicy} from '../GamePolicy';


export class BuildEmergencyHospitalPolicy extends GamePolicy {

  private HospitalCapacityChange : number = 10000;
  private MoneyChangeRate  : number = -0.07;

  private expandHospitalBedsPolicyEntity: string;

  constructor(expandHospitalBedsPolicyEntity: string) {
    super();
    this.expandHospitalBedsPolicyEntity = expandHospitalBedsPolicyEntity;
  }

    isEnactable(state: GameState, countryEntity: CountryEntity): boolean
    {
      const country = state.getCountry(countryEntity);
      if (country.hospitalCapacity == country.hospitalCapacityStartValue)
      {
          return true;
      }
      else
      {
          return false;
      }
    }

    isRevokable(state: GameState, countryEntity: CountryEntity): boolean {
      return this.isEnacted;
    }

    onEnact(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.hospitalCapacity += this.HospitalCapacityChange;
      country.money.relativeRateOfChange += this.MoneyChangeRate;
      this.isEnacted = true;
      return true;
    }

    onRevoke(state: GameState, countryEntity: CountryEntity): boolean {
      const country = state.getCountry(countryEntity);
      country.hospitalCapacity -= this.HospitalCapacityChange;
      country.money.relativeRateOfChange -= this.MoneyChangeRate;
      state.revokePolicy(countryEntity, this.expandHospitalBedsPolicyEntity
    )
      this.isEnacted = false;
      return true;
    }

    applyEffects(state: GameState, countryEntity: CountryEntity): boolean {
      return true;
    }

  }
