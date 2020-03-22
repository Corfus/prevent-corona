import { Pipe, PipeTransform } from '@angular/core';


const ACTION_ID_TO_TEXT: {[key: string]: string} = {
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
  EnactPayForVaccineDev: 'Medicine'
};

@Pipe({
  name: 'actionDetails'
})
export class ActionDetailsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return  ACTION_ID_TO_TEXT[value];
  }

}


