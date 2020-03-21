import { Component, OnInit } from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';
import {GameState} from '../../../../gamelogic/GameState';
import {Observable, Subject} from 'rxjs';
import {GameActionEntity} from '../../../../gamelogic/GameAction';

@Component({
  selector: 'app-game-site',
  templateUrl: './game-site.component.html',
  styleUrls: ['./game-site.component.scss'],
  providers: [GameLogicService]
})
export class GameSiteComponent implements OnInit {
  actionSubject: Subject<GameActionEntity> = new Subject<GameActionEntity>();
  gameState: GameState;
  gameStateJSON: string;

  constructor(private gameLogic: GameLogicService) {
  }

  ngOnInit(): void {
    this.gameLogic.startGame(this.actionSubject.asObservable());
    this.getGameState();
    this.getGameStateJSON();
  }

  getGameState(): void {
    this.gameLogic.getGameState()
        .subscribe(gameState => console.log(gameState));
  }

  getGameStateJSON(): void {
      this.gameLogic.getGameState()
          .subscribe(gameStateJSON => this.gameStateJSON = JSON.stringify(gameStateJSON));
    }

    onActionSelected(gameAction: GameActionEntity): void {
      this.actionSubject.next(gameAction);
    }
}
