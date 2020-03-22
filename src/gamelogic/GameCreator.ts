import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {ClosedBorderPolicy} from './policies/ClosedBorderPolicy';
import {ClosedCompaniesPolicy} from './policies/ClosedCompaniesPolicy';
import {ClosedSchoolPolicy} from './policies/ClosedSchoolPolicy';
import {CurfewPolicy} from './policies/CurfewPolicy';
import {PayForMedicineDevPolicy} from './policies/PayForMedicineDevPolicy';
import {PayForVaccineDevPolicy} from './policies/PayForVaccineDevPolicy';
import {BuildEmergencyHospitalPolicy} from './policies/BuildEmergencyHospitalPolicy';
import {ExpandHospitalBedsPolicy} from './policies/ExpandHospitalBedsPolicy';

import {GameAction, GameActionEntity, generatePolicyActions} from './GameAction';
import {FakeNewsMessageAction, FakeNewsMessageEntity} from './actions/FakeNewsMessageAction';
import {HygieneHandWashAdviceAction, HygieneHandWashAdviceEntity} from './actions/HygieneHandWashAdviceAction';
import {MouthguardAdvideAction, MouthguardAdvideEntity} from './actions/MouthguardAdvideAction';
import {KeepDistanceAdviceAction, KeepDistanceAdviceEntity} from './actions/KeepDistanceAdviceAction';
import {LowDeathMessageAction, LowDeathMessageEntity} from './actions/LowDeathMessageAction';
import {InformAboutPoliticanDeathAction, InformAboutPoliticanDeathEntity} from './actions/InformAboutPoliticanDeathAction';

import {GameEvent, GameEventEntity} from './GameEvent';
import {CoronaPartyEntity, CoronaPartyEvent} from './events/CoronaPartyEvent';
import {IllegalBorderCrossingEntity, IllegalBorderCrossingEvent} from './events/IllegalBorderCrossingEvent';
import {ScientistsDieEntity, ScientistsDieEvent} from './events/ScientistsDieEvent';
import {StockMarketCrashEntity, StockMarketCrashEvent} from './events/StockMarketCrashEvent';
import {StockMarketCrashHardEntity, StockMarketCrashHardEvent} from './events/StockMarketCrashHardEvent';
import {StockMarketRecoveryEntity, StockMarketRecoveryEvent} from './events/StockMarketRecoveryEvent';
import {WirVsVirusHackthonEntity, WirVsVirusHackthonEvent} from './events/WirVsVirusHackthonEvent';
import {ChinaSackOfRiseEntity, ChinaSackOfRiseHarmlessEvent} from './events/ChinaSackOfRiseHarmlessEvent';

import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';


interface PolicyList {
  [policyEntity: string]: GamePolicy; // GamePolicyEntity
}

interface ActionList {
  [actionEntity: string]: GameAction; // GameActionEntity
}

interface EventList {
  [eventEntity: string]: GameEvent; // GameEventEntity
}

export class GameCreator {
  constructor() {
  }

  public static createGameState(): GameState {
    const playerEntity: CountryEntity = 'Germany';

    // Policies
    const policies: PolicyList = {
      ClosedBorder: new ClosedBorderPolicy(),
      ClosedCompanies: new ClosedCompaniesPolicy(),
      ClosedSchool: new ClosedSchoolPolicy(),
      Curfew: new CurfewPolicy(),
      PayForMedicineDev: new PayForMedicineDevPolicy(),
      PayForVaccineDev: new PayForVaccineDevPolicy(),
      EmergencyHospital: new BuildEmergencyHospitalPolicy(),
      ExpandHospital: new ExpandHospitalBedsPolicy()
    };

    const Policies: Map<GamePolicyEntity, GamePolicy> = new Map(Object.entries(policies));

    // Actions
    const actions: ActionList = {
      [FakeNewsMessageEntity]: new FakeNewsMessageAction(),
      [HygieneHandWashAdviceEntity]: new HygieneHandWashAdviceAction(),
      [MouthguardAdvideEntity]: new MouthguardAdvideAction(),
      [KeepDistanceAdviceEntity]: new KeepDistanceAdviceAction(),
      [LowDeathMessageEntity]: new LowDeathMessageAction(),
      [InformAboutPoliticanDeathEntity]: new InformAboutPoliticanDeathAction()
    };
    const Actions: Map<GameActionEntity, GameAction> = new Map(Object.entries(actions));

    Policies.forEach((policy, entity) => {
      const policyPair = generatePolicyActions(entity);
      Actions.set(policyPair.enactEntity, policyPair.enact);
      Actions.set(policyPair.revokeEntity, policyPair.revoke);
    });

    // Events
    const events: EventList = {
      //  game relevant
      [WirVsVirusHackthonEntity]: new WirVsVirusHackthonEvent(),
      [CoronaPartyEntity]: new CoronaPartyEvent(),
      [IllegalBorderCrossingEntity]: new IllegalBorderCrossingEvent(),
      [ScientistsDieEntity]: new ScientistsDieEvent(),
      [StockMarketCrashEntity]: new StockMarketCrashEvent(),
      [StockMarketCrashHardEntity]: new StockMarketCrashHardEvent(),
      [StockMarketRecoveryEntity]: new StockMarketRecoveryEvent(),
      // Not game relevant
      [ChinaSackOfRiseEntity]: new ChinaSackOfRiseHarmlessEvent()
    };
    const Events: Map<GameEventEntity, GameEvent> = new Map(Object.entries(events));

    // PlayerCountry
    const playerCountry = new CountryState();
    playerCountry.numberOfInfected.relativeRateOfChange = 1.2;
    playerCountry.totalPopulation.value = 83000000;                     // 0 - ...        Start: 83.000.000 https://de.statista.com/themen/20/einwohnerzahl/
    playerCountry.hospitalCapacityStartValue = 100000;
    playerCountry.hospitalCapacity = playerCountry.hospitalCapacityStartValue;
    playerCountry.happiness.value = 100;                                // 0 - 100        Start: 100
    playerCountry.numberOfInfected.value = 1;                           // 0 - 83.000.000 Start: 1
    playerCountry.numberOfInfected.relativeRateOfChange = 0.000000001;  // bitte behutsam ändern
    playerCountry.money.value = 5000000000;                             // 0 - 50.000.000.000.000
    playerCountry.deathProbability.value = 0.0005;                      // 0 - TODO
    playerCountry.recoverProbability.value = 0.005;                     // 0 - TODO
    playerCountry.acceptance.value = 0;                                 // 0 - 100        Start: 0

    const chinaEntity: CountryEntity = 'China';
    const china = new CountryState();
    china.numberOfInfected.relativeRateOfChange = 1.1;
    china.numberOfInfected.value = 0;
    const Countries: Map<CountryEntity, CountryState> = new Map([[playerEntity, playerCountry], [chinaEntity, china]]);

    return new GameState(Countries, Policies, Actions, Events, playerEntity);
  }

}
