import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameActionEntity, generateEnactPolicyName, generateRevokePolicyName} from '../../../../gamelogic/framework/GameAction';

export enum EActionCategory {
  Unselected = -1,
  Propaganda,
  Decisions,
  Research
}

const categoryToName = {
  [EActionCategory.Propaganda]: 'Mitteilungen',
  [EActionCategory.Decisions]: 'Entscheidungen',
  [EActionCategory.Research]: 'Forschung',
};

const ACTION_ID_TO_CATEGORY: { [key: string]: EActionCategory } = {
  FakeNewsMessage: EActionCategory.Propaganda,
  HygieneHandWashAdvice: EActionCategory.Propaganda,
  MouthguardAdvide: EActionCategory.Decisions,
  KeepDistanceAdvice: EActionCategory.Decisions,
  LowDeathMessage: EActionCategory.Propaganda,
  InformAboutPoliticanDeath: EActionCategory.Propaganda,
  [generateEnactPolicyName('EmergencyHospital')]: EActionCategory.Decisions,
  [generateRevokePolicyName('EmergencyHospital')]: EActionCategory.Decisions,
  [generateEnactPolicyName('ClosedBorder')]: EActionCategory.Decisions,
  [generateRevokePolicyName('ClosedBorder')]: EActionCategory.Decisions,
  [generateEnactPolicyName('ClosedCompanies')]: EActionCategory.Decisions,
  [generateRevokePolicyName('ClosedCompanies')]: EActionCategory.Decisions,
  [generateEnactPolicyName('ClosedSchool')]: EActionCategory.Decisions,
  [generateRevokePolicyName('ClosedSchool')]: EActionCategory.Decisions,
  [generateEnactPolicyName('Curfew')]: EActionCategory.Decisions,
  [generateRevokePolicyName('Curfew')]: EActionCategory.Decisions,
  [generateEnactPolicyName('ExpandHospital')]: EActionCategory.Decisions,
  [generateRevokePolicyName('ExpandHospital')]: EActionCategory.Decisions,
  [generateEnactPolicyName('PayForMedicineDev')]: EActionCategory.Research,
  [generateRevokePolicyName('PayForMedicineDev')]: EActionCategory.Research,
  [generateEnactPolicyName('PayForVaccineDev')]: EActionCategory.Research,
  [generateRevokePolicyName('PayForVaccineDev')]: EActionCategory.Research,
};


@Component({
  selector: 'app-action-space',
  templateUrl: './action-space.component.html',
  styleUrls: ['./action-space.component.scss']
})
export class ActionSpaceComponent {
  @Input() actions: Array<string> = [];
  @Output() actionSelected: EventEmitter<GameActionEntity> = new EventEmitter<GameActionEntity>();

  selectedCategory: EActionCategory = EActionCategory.Unselected;

  setCategory(category: EActionCategory): void {
    this.selectedCategory = category;
  }

  unselectCategory(): void {
    this.selectedCategory = EActionCategory.Unselected;
  }

  getActionList(): Array<any> {
    return this.actions.filter(action => ACTION_ID_TO_CATEGORY[action] === this.selectedCategory);
  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSelected.emit(gameAction);
  }

  getCategoryName(category: EActionCategory): string {
    return categoryToName[category];
  }
}
