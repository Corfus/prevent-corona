import { Pipe, PipeTransform } from '@angular/core';
import {GameActionEntity, generateEnactPolicyName, generateRevokePolicyName} from '../../gamelogic/GameAction';


const ACTION_ID_TO_IMAGE: {[key: string]: string} = {
  FakeNewsMessage: 'FakeNews_fromUs',
  HygieneHandWashAdvice: 'Wash_Hands',
  InformAboutPoliticanDeath: 'PoliticianDeath',
  KeepDistanceAdvice: 'Distance',
  LowDeathMessage: 'Propaganda',
  MouthguardAdvide: 'MouthGuard',
  EnactClosedBorder: 'Grenzschließung',
  EnactClosedCompanies: 'Home_Office',
  EnactClosedSchools: 'School',
  EnactCurfew: 'Time',
  EnactPayForMedicineDev: 'Medicine',
  EnactPayForVaccineDev: 'Medicine',
  [generateEnactPolicyName('EmergencyHospital')]: 'Hospital_bed_capacity',
  [generateRevokePolicyName('EmergencyHospital')]: 'Hospital_bed_capacity',
  [generateEnactPolicyName('ClosedBorder')]: 'Grenzschließung',
  [generateRevokePolicyName('ClosedBorder')]: 'Grenzschließung',
  [generateEnactPolicyName('ClosedCompanies')]: 'Home_Office',
  [generateRevokePolicyName('ClosedCompanies')]: 'Home_Office',
  [generateEnactPolicyName('ClosedSchool')]: 'School',
  [generateRevokePolicyName('ClosedSchool')]: 'School',
  [generateEnactPolicyName('Curfew')]: 'Time',
  [generateRevokePolicyName('Curfew')]: 'Time',
  [generateEnactPolicyName('ExpandHospital')]: 'Hospital_bed_capacity',
  [generateRevokePolicyName('ExpandHospital')]: 'Hospital_bed_capacity',
  [generateEnactPolicyName('PayForMedicineDev')]: 'Medicine',
  [generateRevokePolicyName('PayForMedicineDev')]: 'Medicine',
  [generateEnactPolicyName('PayForVaccineDev')]: 'Medicine',
  [generateRevokePolicyName('PayForVaccineDev')]: 'Medicine',
};



@Pipe({
  name: 'actionToImage'
})
export class ActionToImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return  `${ACTION_ID_TO_IMAGE[value]}`;;
  }

}
