import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GameLogicService} from '../../../services/game-logic.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-end-site',
  templateUrl: './end-site.component.html',
  styleUrls: ['./end-site.component.scss']
})
export class EndSiteComponent implements OnInit {

  score: number;
  deaths: number;
  infections: number;
  healed: number;
  stateCapital: number;
  research: number;
  happiness: number;
  acceptance: number;

  constructor(private cdRef: ChangeDetectorRef, private gameLogicService: GameLogicService) {
  }

  async ngOnInit(): Promise<void> {
    const gamestate = await this.gameLogicService.gameState$.pipe(take(1)).toPromise();
    const countryState = gamestate.getCountry(gamestate.playerCountry);

    this.deaths = countryState.deaths;
    this.infections = countryState.currentlyInfected;
    this.healed = countryState.numberOfRecovered.value;
    this.stateCapital = countryState.money.value;
    this.research = countryState.medicine.value;
    this.happiness = countryState.acceptance.value;
    this.acceptance = countryState.acceptance.value;
    this.cdRef.detectChanges();
  }

}
