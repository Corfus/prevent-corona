import { Component, OnInit } from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';

@Component({
  selector: 'app-game-site',
  templateUrl: './game-site.component.html',
  styleUrls: ['./game-site.component.scss'],
  providers: [GameLogicService]
})
export class GameSiteComponent implements OnInit {

  constructor(private gameLogic: GameLogicService) { }

  ngOnInit(): void {
  }

}
