import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {ClosedBorderPolicy} from './policies/ClosedBorderPolicy';
import {ClosedCompaniesPolicy } from './policies/ClosedCompaniesPolicy';
import {ClosedSchoolPolicy } from './policies/ClosedSchoolPolicy';
import {CurfewPolicy } from './policies/CurfewPolicy';
import {PayForMedicineDevPolicy } from './policies/PayForMedicineDevPolicy';
import {PayForVaccineDevPolicy } from './policies/PayForVaccineDevPolicy';
import { BuildEmergencyHospitalPolicy } from './policies/BuildEmergencyHospitalPolicy';
import { ExpandHospitalBedsPolicy } from './policies/ExpandHospitalBedsPolicy';

import {GameAction, GameActionEntity} from './GameAction';
import { FakeNewsMessageAction, FakeNewsMessageEntity} from './actions/FakeNewsMessageAction';
import { HygieneHandWashAdviceAction, HygieneHandWashAdviceEntity } from './actions/HygieneHandWashAdviceAction';
import { MouthguardAdvideAction, MouthguardAdvideEntity } from './actions/MouthguardAdvideAction';
import { KeepDistanceAdviceAction, KeepDistanceAdviceEntity } from './actions/KeepDistanceAdviceAction';
import { LowDeathMessageAction, LowDeathMessageEntity } from './actions/LowDeathMessageAction';
import { InformAboutPoliticanDeathAction, InformAboutPoliticanDeathEntity } from './actions/InformAboutPoliticanDeathAction';

import {GameEvent, GameEventEntity} from './GameEvent';
import {LocalEvent} from './GameEvent';
import { CoronaPartyEvent, CoronaPartyEntity} from './events/CoronaPartyEvent';
import { IllegalBorderCrossingEvent, IllegalBorderCrossingEntity } from './events/IllegalBorderCrossingEvent';
import { ScientistsDieEvent, ScientistsDieEntity } from './events/ScientistsDieEvent';
import { StockMarketCrashEvent, StockMarketCrashEntity } from './events/StockMarketCrashEvent';
import { StockMarketCrashHardEvent, StockMarketCrashHardEntity } from './events/StockMarketCrashHardEvent';
import { StockMarketRecoveryEvent,StockMarketRecoveryEntity } from './events/StockMarketRecoveryEvent';
import { WirVsCoronaHackthonEvent, WirVsCoronaHackthonEntity } from './events/WirVsCoronaHackthonEvent';
import { ChinaSackOfRiseHarmlessEvent, ChinaSackOfRiseEntity } from './events/ChinaSackOfRiseHarmlessEvent';

import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';
import {System} from './System';
import {EventSystem} from './systems/EventSystem';
import { EnactClosedBorderAction } from './actions/EnactClosedBorderAction';
import { EnactClosedCompaniesAction } from './actions/EnactClosedCompaniesAction';
import { EnactClosedSchoolAction } from './actions/EnactClosedSchoolAction';
import { EnactCurfewAction } from './actions/EnactCurfewAction';
import { EnactPayForMedicineDevAction } from './actions/EnactPayForMedicineDevAction';
import { EnactPayForVaccineDevAction } from './actions/EnactPayForVaccineDevAction';
import { RevokeClosedBorderAction } from './actions/RevokeClosedBorderAction';
import { RevokeClosedCompaniesAction } from './actions/RevokeClosedCompaniesAction';
import { RevokeClosedSchoolAction } from './actions/RevokeClosedSchoolAction';
import { RevokeCurfewAction } from './actions/RevokeCurfewAction';
import { RevokePayForMedicineDevAction } from './actions/RevokePayForMedicineDevAction';
import { RevokePayForVaccineDevAction } from './actions/RevokePayForVaccineDevAction ';
import { RevokeEmergencyHospitalActionAction } from './actions/RevokeEmergencyHospitalAction';
import { RevokeExpandHospitalAction } from './actions/RevokeExpandHospitalAction';
import { EnactEmergencyHospitalAction } from './actions/EnactEmergencyHospitalAction';
import { EnactExpandHospitalAction } from './actions/EnactExpandHospitalAction';



export class GameCreator {
  constructor() {
  }

  public static createGameState(): GameState {
    const playerEntity: CountryEntity = 'Germany';

    //Policies
    const closedBorder: GamePolicyEntity = 'ClosedBorder';
    const closedCompanies: GamePolicyEntity = 'ClosedCompanies';
    const closedSchool: GamePolicyEntity = 'ClosedSchool';
    const curfew: GamePolicyEntity = 'Curfew';
    const payForMedicineDev: GamePolicyEntity = 'PayForMedicineDev';
    const payForVaccineDev: GamePolicyEntity = 'PayForVaccineDev';
    const emergencyHospital: GamePolicyEntity = 'EmergencyHospital';
    const expandHospital: GamePolicyEntity = 'ExpandHospital';

    const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
    Policies.set(closedBorder, new ClosedBorderPolicy());
    Policies.set(closedCompanies,new ClosedCompaniesPolicy());
    Policies.set(closedSchool,new ClosedSchoolPolicy());
    Policies.set(curfew, new CurfewPolicy());
    Policies.set(payForMedicineDev, new PayForMedicineDevPolicy());
    Policies.set(payForVaccineDev,new PayForVaccineDevPolicy());
    Policies.set(emergencyHospital,new BuildEmergencyHospitalPolicy());
    Policies.set(expandHospital,new ExpandHospitalBedsPolicy());

    //Actions
    const enactClosedBorder : GameActionEntity = 'EnactClosedBorder';
    const enactClosedCompanies : GameActionEntity = 'EnactClosedCompanies';
    const enactClosedSchools : GameActionEntity = 'EnactClosedSchools';
    const enactCurfewAction : GameActionEntity = 'EnactCurfew';
    const enactPayForMedicineDev : GameActionEntity = 'EnactPayForMedicineDev';
    const enactPayForVaccineDev : GameActionEntity = 'EnactPayForVaccineDev';
    const enactEmergencyHospital : GameActionEntity = 'EnactEmergencyHospital';
    const enactExpandHospital : GameActionEntity = 'EnactExpandHospital';
    const revokeClosedBorder : GameActionEntity = 		'RevokeClosedBorder';
    const revokeClosedCompanies : GameActionEntity = 	'RevokeClosedCompanies';
    const revokeClosedSchools : GameActionEntity = 		'RevokeClosedSchools';
    const revokeCurfewAction : GameActionEntity = 		'RevokeCurfew';
    const revokePayForMedicineDev : GameActionEntity = 	'RevokePayForMedicineDev';
    const revokePayForVaccineDev : GameActionEntity = 	'RevokePayForVaccineDev';
    const revokeEmergencyHospital : GameActionEntity = 	'RevokeEmergencyHospital';
    const revokeExpandHospital : GameActionEntity = 	'RevokeExpandHospital';

    const Actions: Map<GameActionEntity, GameAction> = new Map();
    Actions.set(FakeNewsMessageEntity, new FakeNewsMessageAction());
    Actions.set(HygieneHandWashAdviceEntity, new HygieneHandWashAdviceAction());
    Actions.set(MouthguardAdvideEntity, new MouthguardAdvideAction());
    Actions.set(KeepDistanceAdviceEntity, new KeepDistanceAdviceAction());
    Actions.set(LowDeathMessageEntity, new LowDeathMessageAction());
    Actions.set(InformAboutPoliticanDeathEntity, new InformAboutPoliticanDeathAction());
    // Policies
    Actions.set(enactClosedBorder, new EnactClosedBorderAction());
    Actions.set(enactClosedCompanies, new EnactClosedCompaniesAction());
    Actions.set(enactClosedSchools, new EnactClosedSchoolAction());
    Actions.set(enactCurfewAction, new EnactCurfewAction());
    Actions.set(enactPayForMedicineDev, new EnactPayForMedicineDevAction());
    Actions.set(enactPayForVaccineDev, new EnactPayForVaccineDevAction());
    Actions.set(enactEmergencyHospital, new EnactEmergencyHospitalAction());
    Actions.set(enactExpandHospital, new EnactExpandHospitalAction());
    Actions.set(revokeClosedBorder, new 		RevokeClosedBorderAction());
    Actions.set(revokeClosedCompanies, new 		RevokeClosedCompaniesAction());
    Actions.set(revokeClosedSchools, new 		RevokeClosedSchoolAction());
    Actions.set(revokeCurfewAction, new 		RevokeCurfewAction());
    Actions.set(revokePayForMedicineDev, new 	RevokePayForMedicineDevAction());
    Actions.set(revokePayForVaccineDev, new 	RevokePayForVaccineDevAction());
    Actions.set(revokeEmergencyHospital, new 	RevokeEmergencyHospitalActionAction());
    Actions.set(revokeExpandHospital, new 	RevokeExpandHospitalAction());


    const Events: Map<GameEventEntity, GameEvent> = new Map();
    // Gameplay relevant
    Events.set(WirVsCoronaHackthonEntity, new WirVsCoronaHackthonEvent());
    Events.set(CoronaPartyEntity, new CoronaPartyEvent());
    Events.set(IllegalBorderCrossingEntity, new IllegalBorderCrossingEvent());
    Events.set(ScientistsDieEntity, new ScientistsDieEvent());
    Events.set(StockMarketCrashEntity, new StockMarketCrashEvent());
    Events.set(StockMarketCrashHardEntity, new StockMarketCrashHardEvent());
    Events.set(StockMarketRecoveryEntity, new StockMarketRecoveryEvent());
    // Not gameplay relevant
    Events.set(ChinaSackOfRiseEntity, new ChinaSackOfRiseHarmlessEvent());


    //PlayerCountry
    const playerCountry = new CountryState();
    playerCountry.numberOfInfected.relativeRateOfChange = 1.2;
    playerCountry.totalPopulation.value = 83000000;
    playerCountry.hospitalCapacity = 100000;
    playerCountry.happiness.value = 100;
    playerCountry.numberOfInfected.value = 1;


    const chinaEntity: CountryEntity = 'China';
    const china = new CountryState();
    china.numberOfInfected.relativeRateOfChange = 1.1;
    china.numberOfInfected.value = 0;
    const Countries: Map<CountryEntity, CountryState> = new Map([[playerEntity, playerCountry], [chinaEntity, china]]);

    return new GameState(Countries, Policies, Actions, Events, playerEntity);
  }

}
