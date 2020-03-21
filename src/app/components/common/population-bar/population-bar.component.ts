import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-population-bar',
  templateUrl: './population-bar.component.html',
  styleUrls: ['./population-bar.component.scss']
})
export class PopulationBarComponent {
  @Input() infected = 0;
  @Input() deaths = 0;
  @Input() healed = 0;
  @Input() population = 100;

  calcPercentage(numerator: number): number {
    return numerator / this.population * 100;
  }
}
