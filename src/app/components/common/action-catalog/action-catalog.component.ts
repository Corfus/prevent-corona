import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

@Component({
  selector: 'app-action-catalog',
  templateUrl: './action-catalog.component.html',
  styleUrls: ['./action-catalog.component.scss']
})
export class ActionCatalogComponent implements OnInit  {
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
    let out = []
    while (i < len) {
        out.push(actionList.slice(i, i += splitSize));
    }
    return out;
  }
}
