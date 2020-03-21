import {Injectable} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Injectable()
export class GameLogicService {
  readonly gameState$: Observable<any>;

  private timer$: Observable<number>;
  private timerSubscription: Subscription;

  constructor() {
  }

  startGame(): void {
    this.finishGame();
    this.timer$ = interval(1000);
  }

  finishGame(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  dispatchAction(): void {

  }
}
