import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

export enum EActionCategory {
  Unselected = -1,
  Propaganda,
  Decisions,
  Research
}

@Component({
  selector: 'app-action-space',
  templateUrl: './action-space.component.html',
  styleUrls: ['./action-space.component.scss']
})
export class ActionSpaceComponent implements OnInit {
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
    return [];
  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSelected.emit(gameAction);
  }
}
