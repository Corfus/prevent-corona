import { Pipe, PipeTransform } from '@angular/core';
import {GameActionEntity, generateEnactPolicyName, generateRevokePolicyName} from '../../gamelogic/GameAction';


const ACTION_ID_TO_TEXT: {[key: string]: string} = {
  FakeNewsMessage: 'Fake-News verbreiten',
  HygieneHandWashAdvice: 'Hände waschen',
  MouthguardAdvide: 'Mundschutz tragen',
  KeepDistanceAdvice: 'Abstand halten ankündigen',
  LowDeathMessage: 'Geringe Todeszahlen melden',
  InformAboutPoliticanDeath: 'Tod eines Politikers melden',
  [generateEnactPolicyName('BuildEmergencyHospitalPolicy')]: 'Krankenhäuser bauen',
  [generateRevokePolicyName('BuildEmergencyHospitalPolicy')]: 'Stoppe den Baun von Krankenhäusern',
  [generateEnactPolicyName('ClosedBorderPolicy')]: 'Grenzen schließen',
  [generateRevokePolicyName('ClosedBorderPolicy')]: 'Grenzen öffnen',
  [generateEnactPolicyName('ClosedCompaniesPolicy')]: 'Home Office verordnen',
  [generateRevokePolicyName('ClosedCompaniesPolicy')]: 'Firmen öffnen',
  [generateEnactPolicyName('ClosedSchoolPolicy')]: 'Schulen schließen',
  [generateRevokePolicyName('ClosedSchoolPolicy')]: 'Schulen eröffnen',
  [generateEnactPolicyName('CurfewPolicy')]: 'Ausgangssperre',
  [generateRevokePolicyName('CurfewPolicy')]: 'Ausgangssperre aufheben',
  [generateEnactPolicyName('ExpandHospitalBedsPolicy')]: 'Krankenhaus betten ausbauen',
  [generateRevokePolicyName('ExpandHospitalBedsPolicy')]: 'Krankenhausbetten reduzieren',
  [generateEnactPolicyName('PayForMedicineDevPolicy')]: 'Medizin fördern',
  [generateRevokePolicyName('PayForMedicineDevPolicy')]: 'Medizinfördergelder reudzieren',
  [generateEnactPolicyName('PayForVaccineDevPolicy')]: 'Impfforschungen fördern',
  [generateRevokePolicyName('PayForVaccineDevPolicy')]: 'Forschungen stoppen',
};

@Pipe({
  name: 'actionToDescription'
})
export class ActionToDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return  ACTION_ID_TO_TEXT[value];
  }

}
