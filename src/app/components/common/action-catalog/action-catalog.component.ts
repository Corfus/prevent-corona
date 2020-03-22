import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

@Component({
  selector: 'app-action-catalog',
  templateUrl: './action-catalog.component.html',
  styleUrls: ['./action-catalog.component.scss']
})
export class ActionCatalogComponent {
  @Input() actionList: Array<any> = [];
  @Output() actionSelected: EventEmitter<GameActionEntity> = new EventEmitter<GameActionEntity>();

  onPointerDown(action: GameActionEntity): void {
    this.actionSelected.emit(action);
  }
}
