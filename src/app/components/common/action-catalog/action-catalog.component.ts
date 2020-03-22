import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/framework/GameAction';

@Component({
  selector: 'app-action-catalog',
  templateUrl: './action-catalog.component.html',
  styleUrls: ['./action-catalog.component.scss']
})
export class ActionCatalogComponent implements OnInit {
  @Input() actionList: Array<any> = [];
  @Output() actionSelected: EventEmitter<GameActionEntity> = new EventEmitter<GameActionEntity>();

  groupedActionList: Array<Array<any>> = [];

  onPointerDown(action: GameActionEntity): void {
    this.actionSelected.emit(action);
  }

  ngOnInit(): void {
    this.groupedActionList = this.groupActionList(this.actionList, 4);
  }

  groupActionList(actionList: Array<any>, splitSize: number): Array<Array<any>> {
    const len = actionList.length;
    let i = 0;
    const out = [];
    while (i < len) {
      const currentGroup = actionList.slice(i, i += splitSize);
      if (currentGroup.length % 2 !== 0) {
        currentGroup.push('');
      }
      out.push(currentGroup);
    }
    return out;
  }
}
