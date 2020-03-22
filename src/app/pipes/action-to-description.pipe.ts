import { Pipe, PipeTransform } from '@angular/core';
import {GameActionEntity, generateEnactPolicyName, generateRevokePolicyName} from '../../gamelogic/GameAction';


const ACTION_ID_TO_TEXT: {[key: string]: string} = {
  FakeNewsMessage: 'Warnung vor Fake-News!',
  HygieneHandWashAdvice: 'Hände waschen',
  MouthguardAdvide: 'Mundschutz tragen',
  KeepDistanceAdvice: 'Abstand halten ankündigen',
  LowDeathMessage: 'Geringe Todeszahlen melden',
  InformAboutPoliticanDeath: 'Tod eines Politikers melden',
  [generateEnactPolicyName('EmergencyHospital')]: 'Krankenhäuser bauen',
  [generateRevokePolicyName('EmergencyHospital')]: 'Stoppe den Baun von Krankenhäusern',
  [generateEnactPolicyName('ClosedBorder')]: 'Grenzen schließen',
  [generateRevokePolicyName('ClosedBorder')]: 'Grenzen öffnen',
  [generateEnactPolicyName('ClosedCompanies')]: 'Home Office verordnen',
  [generateRevokePolicyName('ClosedCompanies')]: 'Firmen öffnen',
  [generateEnactPolicyName('ClosedSchool')]: 'Schulen schließen',
  [generateRevokePolicyName('ClosedSchool')]: 'Schulen eröffnen',
  [generateEnactPolicyName('Curfew')]: 'Ausgangssperre',
  [generateRevokePolicyName('Curfew')]: 'Ausgangssperre aufheben',
  [generateEnactPolicyName('ExpandHospital')]: 'Krankenhaus betten ausbauen',
  [generateRevokePolicyName('ExpandHospital')]: 'Krankenhausbetten reduzieren',
  [generateEnactPolicyName('PayForMedicineDev')]: 'Medizin fördern',
  [generateRevokePolicyName('PayForMedicineDev')]: 'Medizinfördergelder reudzieren',
  [generateEnactPolicyName('PayForVaccineDev')]: 'Impfforschungen fördern',
  [generateRevokePolicyName('PayForVaccineDev')]: 'Forschungen stoppen',
};

@Pipe({
  name: 'actionToDescription'
})
export class ActionToDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return  ACTION_ID_TO_TEXT[value];
  }

}
