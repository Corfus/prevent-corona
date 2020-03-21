import { Component, OnInit } from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';
import {GameState} from '../../../../gamelogic/GameState';

@Component({
  selector: 'app-game-site',
  templateUrl: './game-site.component.html',
  styleUrls: ['./game-site.component.scss'],
  providers: [GameLogicService]
})
export class GameSiteComponent implements OnInit {

  gameState: GameState;
  gameStateJSON: string;

  constructor(private gameLogic: GameLogicService) { }

  ngOnInit(): void {
    this.getGameState();
    this.getGameStateJSON();
  }

  getGameState(): void {
    this.gameLogic.getGameState()
        .subscribe(gameState => this.gameState = gameState);
  }

  getGameStateJSON(): void {
      this.gameLogic.getGameState()
          .subscribe(gameStateJSON => this.gameStateJSON = JSON.stringify(gameStateJSON));
    }
}
