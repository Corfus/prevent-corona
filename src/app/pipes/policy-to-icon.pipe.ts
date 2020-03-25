import {Pipe, PipeTransform} from '@angular/core';
import {GamePolicyEntity} from '../../gamelogic/framework/GamePolicy';

const POLICY_TO_ICON = {
  ['ClosedBorder']: 'Grenzschließung',
  ['ClosedCompanies']: 'Home_Office',
  ['ClosedSchool']: 'Grenzschließung',
  ['Curfew']: 'Grenzschließung',
  ['PayForMedicineDev']: 'Medicine',
  ['PayForVaccineDev']: 'Medicine',
};


@Pipe({
  name: 'policyToIcon'
})
export class PolicyToIconPipe implements PipeTransform {

  transform(policy: GamePolicyEntity): string {
    return POLICY_TO_ICON[policy];
  }

}
