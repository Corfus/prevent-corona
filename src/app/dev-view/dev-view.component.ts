import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {GameActionEntity} from '../../gamelogic/GameAction';
import {GameState} from '../../gamelogic/GameState';
import {GameLogicService} from '../services/game-logic.service';
import {map} from 'rxjs/operators';
import {CountryState} from '../../gamelogic/CountryState';

@Component({
  selector: 'app-dev-view',
  templateUrl: './dev-view.component.html',
  styleUrls: ['./dev-view.component.scss'],
  providers: [GameLogicService]
})
export class DevViewComponent implements OnInit {
  actionSubject: Subject<GameActionEntity> = new Subject<GameActionEntity>();
  gameState$: Observable<GameState>;
  possibleActions$: Observable<Array<string>>;

  countrySubject$: Subject<CountryState> = new Subject<CountryState>();
  country$: Observable<CountryState>;

  constructor(private gameLogic: GameLogicService) {
  }

  ngOnInit(): void {
    this.gameLogic.startGame(this.actionSubject.asObservable());
    this.gameState$ = this.gameLogic.gameState$;
    this.country$ = this.countrySubject$.asObservable();
    /*this.country$.subscribe((val) => {
      console.log(val);
    });*/
    this.gameState$.subscribe((state) => {
      const country = state.getCountry(state.playerCountry);
      this.countrySubject$.next({...country}); // neues Objekt! wichtig!!! sonst kein update
    });
    this.possibleActions$ = this.gameState$.pipe(map(gs => gs.getActionableActions(gs.playerCountry)));
  }


  onActionSelected(gameAction: GameActionEntity): void {
    this.actionSubject.next(gameAction);
  }
}
