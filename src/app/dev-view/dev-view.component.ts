import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {GameActionEntity} from '../../gamelogic/GameAction';
import {GameState} from '../../gamelogic/GameState';
import {GameLogicService} from '../services/game-logic.service';
import {map} from 'rxjs/operators';
import {Chart} from 'canvasjs';

@Component({
  selector: 'app-dev-view',
  templateUrl: './dev-view.component.html',
  styleUrls: ['./dev-view.component.scss'],
  providers: [GameLogicService]
})
export class DevViewComponent implements OnInit {
  actionSubject: Subject<GameActionEntity> = new Subject<GameActionEntity>();
  gameState$: Observable<GameState>;
  enactedPolices$: Observable<Array<string>>;
  possibleActions$: Observable<Array<string>>;

  constructor(private gameLogic: GameLogicService) {
  }

  ngOnInit(): void {
    this.gameLogic.startGame(this.actionSubject.asObservable());
    this.gameState$ = this.gameLogic.gameState$;
    this.possibleActions$ = this.gameState$.pipe(map(gs => gs.getActionableActions(gs.playerCountry)));
  }

  initChart(): void {
    const result = [{x: '1', y: '5'}, {x: '2', y: '5'}, {x: '3', y: '4'}, {x: '4', y: '1'}, {x: '5', y: '8'}, {
      x: '6',
      y: '9'
    }, {x: '7', y: '5'}, {x: '8', y: '6'}, {x: '9', y: '4'}, {x: '10', y: '7'}];

    const dataPointsArr = [];

    for (let i = 0; i <= result.length - 1; i++) {
      dataPointsArr.push({x: Number(result[i].x), y: Number(result[i].y)});
    }

    const chart = new Chart('chartContainer', {
      title: {
        text: 'Column Chart from JSON'
      },
      data: [{
        dataPoints: dataPointsArr
      }]
    });

    chart.render();

  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSubject.next(gameAction);
  }
}
