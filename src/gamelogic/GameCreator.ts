import {GamePolicy, GamePolicyEntity} from './GamePolicy';
import {ClosedBorderPolicy} from './policies/ClosedBorderPolicy';
import {ClosedCompaniesPolicy } from './policies/ClosedCompaniesPolicy';
import {ClosedSchoolPolicy } from './policies/ClosedSchoolPolicy';
import {CurfewPolicy } from './policies/CurfewPolicy';
import {PayForMedicineDevPolicy } from './policies/PayForMedicineDevPolicy';
import {PayForVaccineDevPolicy } from './policies/PayForVaccineDevPolicy';

import {GameAction, GameActionEntity} from './GameAction';
import {PropagandaAction} from './actions/PropagandaAction';
import { HygieneAdviceAction } from './actions/HygieneAdviceAction';

import {GameEvent, GameEventEntity} from './GameEvent';
import {LocalEvent} from './GameEvent';
import { CoronaPartyEvent} from './events/CoronaPartyEvent';
import { IllegalBorderCrossingEvent } from './events/IllegalBorderCrossingEvent';
import { ScientistsDieEvent } from './events/ScientistsDieEvent';
import { StockMarketCrashEvent } from './events/StockMarketCrashEvent';

import {CountryEntity, CountryState} from './CountryState';
import {GameState} from './GameState';
import {System} from './System';
import {InfectionSystem} from './systems/InfectionSystem';
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

    const Policies: Map<GamePolicyEntity, GamePolicy> = new Map();
    Policies.set(closedBorder, new ClosedBorderPolicy());
    Policies.set(closedCompanies,new ClosedCompaniesPolicy());
    Policies.set(closedSchool,new ClosedSchoolPolicy());
    Policies.set(curfew, new CurfewPolicy());
    Policies.set(payForMedicineDev, new PayForMedicineDevPolicy());
    Policies.set(payForVaccineDev,new PayForVaccineDevPolicy());

    
    //Actions
    const propaganda: GameActionEntity = 'Propaganda';
    const hygieneAdvice : GameActionEntity = 'HygieneAdvice';
    const enactClosedBorder : GameActionEntity = 'EnactClosedBorder';
    const enactClosedCompanies : GameActionEntity = 'EnactClosedCompanies';
    const enactClosedSchools : GameActionEntity = 'EnactClosedSchools';
    const enactCurfewAction : GameActionEntity = 'EnactCurfew';
    const enactPayForMedicineDev : GameActionEntity = 'EnactPayForMedicineDev';
    const enactPayForVaccineDev : GameActionEntity = 'EnactPayForVaccineDev';
    const revokeClosedBorder : GameActionEntity = 		'RevokeClosedBorder';
    const revokeClosedCompanies : GameActionEntity = 	'RevokeClosedCompanies';
    const revokeClosedSchools : GameActionEntity = 		'RevokeClosedSchools';
    const revokeCurfewAction : GameActionEntity = 		'RevokeCurfew';
    const revokePayForMedicineDev : GameActionEntity = 	'RevokePayForMedicineDev';
    const revokePayForVaccineDev : GameActionEntity = 	'RevokePayForVaccineDev';
    
    const Actions: Map<GameActionEntity, GameAction> = new Map();
    Actions.set(propaganda, new PropagandaAction());
    Actions.set(hygieneAdvice, new HygieneAdviceAction());
    Actions.set(enactClosedBorder, new EnactClosedBorderAction());
    Actions.set(enactClosedCompanies, new EnactClosedCompaniesAction());
    Actions.set(enactClosedSchools, new EnactClosedSchoolAction());
    Actions.set(enactCurfewAction, new EnactCurfewAction());
    Actions.set(enactPayForMedicineDev, new EnactPayForMedicineDevAction());
    Actions.set(enactPayForVaccineDev, new EnactPayForVaccineDevAction());
    Actions.set(revokeClosedBorder, new 		RevokeClosedBorderAction());
    Actions.set(revokeClosedCompanies, new 		RevokeClosedCompaniesAction());
    Actions.set(revokeClosedSchools, new 		RevokeClosedSchoolAction());
    Actions.set(revokeCurfewAction, new 		RevokeCurfewAction());
    Actions.set(revokePayForMedicineDev, new 	RevokePayForMedicineDevAction());
    Actions.set(revokePayForVaccineDev, new 	RevokePayForVaccineDevAction());


    //Events
    const coronaParty: GameEventEntity = 'CoronaParty';
    const illegalBorderCrossing: GameEventEntity = 'IllegalBorderCrossing';
    const scientistsDie: GameEventEntity = 'ScientistsDie';
    const stockMarketCrash: GameEventEntity = 'StockMarketCrash';

    const Events: Map<GameEventEntity, GameEvent> = new Map();
    Events.set(coronaParty, new CoronaPartyEvent());
    Events.set(illegalBorderCrossing, new IllegalBorderCrossingEvent());
    Events.set(scientistsDie, new ScientistsDieEvent());
    Events.set(stockMarketCrash, new StockMarketCrashEvent());

    
    //PlayerCountry
    const playerCountry = new CountryState();
    playerCountry.numberOfInfected.relativeRateOfChange = 1.2;
    playerCountry.numberOfInfected.value = 1;


    const chinaEntity: CountryEntity = 'China';
    const china = new CountryState();
    china.numberOfInfected.relativeRateOfChange = 1.1;
    china.numberOfInfected.value = 0;
    const Countries: Map<CountryEntity, CountryState> = new Map([[playerEntity, playerCountry], [chinaEntity, china]]);

    return new GameState(Countries, Policies, Actions, Events, playerEntity);
  }

}
