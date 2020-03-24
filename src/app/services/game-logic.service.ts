import {Injectable} from '@angular/core';
import {interval, Observable, ReplaySubject, Subscription} from 'rxjs';

import {GameState} from '../../gamelogic/framework/GameState';
import {GameRunner} from '../../gamelogic/framework/GameRunner';
import {GameCreator} from '../../gamelogic/framework/GameCreator';
import {GameActionEntity} from '../../gamelogic/framework/GameAction';
import {EventSystem} from 'src/gamelogic/systems/EventSystem';
import {EvolutionSystem} from 'src/gamelogic/systems/EvolutionSystem';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  readonly gameState$: Observable<GameState>;

  private gameRunner: GameRunner;
  private gameState: GameState;
  private gameStateSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  private timer$: Observable<number>;
  private timerSubscription: Subscription;

  constructor() {
    this.gameState = GameCreator.createGameState();
    this.gameStateSubject.next(this.gameState);
    this.gameState$ = this.gameStateSubject.asObservable();
    this.gameRunner = new GameRunner(this.gameState);
    this.gameRunner.AddSystem(new EventSystem());
    this.gameRunner.AddSystem(new EvolutionSystem(0.03));
  }

  startGame(action$: Observable<GameActionEntity>): void {
    this.timer$ = interval(1000);
    this.timerSubscription = this.timer$.subscribe(() => {
      this.gameRunner.Tick();
      this.gameStateSubject.next(this.gameState);
    });
    action$.subscribe((actionEntity) => {
      this.gameRunner.runAction(actionEntity);
    });
  }

  finishGame(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  dispatchAction(): void {
  }
}
