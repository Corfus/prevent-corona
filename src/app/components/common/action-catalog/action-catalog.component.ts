import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

@Component({
  selector: 'app-action-catalog',
  templateUrl: './action-catalog.component.html',
  styleUrls: ['./action-catalog.component.scss']
})
export class ActionCatalogComponent implements OnInit {
  @Input() actionList: Array<any> = [];
  @Output() actionSelected: EventEmitter<GameActionEntity> = new EventEmitter<GameActionEntity>();

  constructor() { }

  ngOnInit(): void {
  }

}
