import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';
import {GameState} from '../../../../gamelogic/framework/GameState';
import {Observable, Subject} from 'rxjs';
import {GameActionEntity} from '../../../../gamelogic/framework/GameAction';
import {filter, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-site',
  templateUrl: './game-site.component.html',
  styleUrls: ['./game-site.component.scss']
})
export class GameSiteComponent implements OnDestroy, OnInit {
  actionSubject: Subject<GameActionEntity> = new Subject<GameActionEntity>();
  gameState$: Observable<GameState>;
  possibleActions$: Observable<Array<string>>;

  constructor(private router: Router, private gameLogic: GameLogicService) {
  }

  ngOnInit(): void {
    this.gameLogic.startGame(this.actionSubject.asObservable());
    this.gameState$ = this.gameLogic.gameState$;
    this.possibleActions$ = this.gameState$.pipe(map(gs => gs.getActionableActions(gs.playerCountry)));
    this.gameState$.pipe(
      map(gs => gs.gameOver),
      filter(gameOver => gameOver),
      take(1)
    ).toPromise().then(() => this.router.navigate(['/end']));
  }

  ngOnDestroy(): void {
    this.gameLogic.finishGame();
  }

  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSubject.next(gameAction);
  }
}
