import {Injectable} from '@angular/core';
import {interval, Observable, Subscription, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {GameState} from '../../gamelogic/GameState';
import {GameRunner} from '../../gamelogic/GameRunner';
import {GameCreator} from '../../gamelogic/GameCreator';
import {GameActionEntity} from '../../gamelogic/GameAction';

@Injectable()
export class GameLogicService {
  readonly gameState$: Observable<GameState>;

  private gameRunner: GameRunner;
  private gameState: GameState;
  private gameStateSubject: Subject<any> = new Subject<any>();
  private timer$: Observable<number>;
  private timerSubscription: Subscription;

  constructor() {
    this.gameState = GameCreator.createGameState();
    this.gameStateSubject.next(this.gameState);
    this.gameState$ = this.gameStateSubject.asObservable();
    this.gameRunner = new GameRunner(this.gameState);
  }

  startGame(action$: Observable<GameActionEntity>): void {
    this.timer$ = interval(1000);
    this.timerSubscription = this.timer$.subscribe(() => {
      this.gameRunner.Tick();
      console.log(this.gameState);
      this.gameStateSubject.next(this.gameState);
    });
  }

  finishGame(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  getGameState(): Observable<GameState> {
    return this.gameState$.pipe(map((gameState) => gameState));
  }

  dispatchAction(): void {
  }
}
