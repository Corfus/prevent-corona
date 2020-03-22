import {Component, OnInit} from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';
import {GameState} from '../../../../gamelogic/GameState';
import {Observable, Subject} from 'rxjs';
import {GameActionEntity} from '../../../../gamelogic/GameAction';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-game-site',
  templateUrl: './game-site.component.html',
  styleUrls: ['./game-site.component.scss'],
  providers: [GameLogicService]
})
export class GameSiteComponent implements OnInit {
  actionSubject: Subject<GameActionEntity> = new Subject<GameActionEntity>();
  gameState$: Observable<GameState>;
  possibleActions$: Observable<Array<string>>;
  eventId$: Observable<string>;

  constructor(private gameLogic: GameLogicService) {
  }

  ngOnInit(): void {
    this.gameLogic.startGame(this.actionSubject.asObservable());
    this.gameState$ = this.gameLogic.gameState$;
    this.possibleActions$ = this.gameState$.pipe(map(gs => gs.getActionableActions(gs.playerCountry)));
  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSubject.next(gameAction);
  }
}
