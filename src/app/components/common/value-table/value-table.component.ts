import {Component, Input, OnInit} from '@angular/core';
import {GameState} from '../../../../gamelogic/GameState';

@Component({
  selector: 'app-value-table',
  templateUrl: './value-table.component.html',
  styleUrls: ['./value-table.component.scss']
})
export class ValueTableComponent implements OnInit {
  @Input() gameState: GameState;

  constructor() { }

  ngOnInit(): void {
  }

  getDeaths(): number {
    return this.gameState.getCountry(this.gameState.playerCountry).deaths;
  }

}
