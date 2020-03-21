import {Injectable} from '@angular/core';
import {interval, Observable, Subject, Subscription} from 'rxjs';

import {GameState} from '../../gamelogic/GameState';
import {GameRunner} from '../../gamelogic/GameRunner';
import {GameCreator} from '../../gamelogic/GameCreator';

@Injectable()
export class GameLogicService {
  readonly gameState$: Observable<GameState>;

  private gameRunner: GameRunner;
  private gameState: GameState;
  private gameStateSubject: Subject<any> = new Subject<any>();
  private timer$: Observable<number>;
  private timerSubscription: Subscription;

  constructor(/*action$: Observable<GameActionEntity>*/) {
    this.gameState = GameCreator.createGameState();
    this.gameState$ = this.gameStateSubject.asObservable();
    this.gameStateSubject.next(this.gameState);
    this.gameRunner = new GameRunner(this.gameState);
    /*action$.subscribe((actionEntity) => {
      this.gameRunner.runAction(actionEntity);
    });*/
    this.startGame();
  }

  startGame(): void {
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
    return this.gameState$;
  }

  dispatchAction(): void {
  }
}
