import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

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

@Component({
  selector: 'app-action-space',
  templateUrl: './action-space.component.html',
  styleUrls: ['./action-space.component.scss']
})
export class ActionSpaceComponent implements OnInit {
  @Input() actions: Array<string> = [];
  @Output() actionSelected: EventEmitter<GameActionEntity> = new EventEmitter<GameActionEntity>();

  selectedCategory: EActionCategory = EActionCategory.Unselected;

  constructor() { }

  ngOnInit(): void {
  }

  setCategory(category: EActionCategory): void {
    this.selectedCategory = category;
  }

  unselectCategory(): void {
    this.selectedCategory = EActionCategory.Unselected;
  }

  getActionList(): Array<any> {
    return this.actions;
  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSelected.emit(gameAction);
  }

  getCategoryName(category: EActionCategory): string {
    return categoryToName[category];
  }
}
