import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  @Input() ticks = 0;

  ticksToTime(): string {
    return `Tag: ${Math.floor(this.ticks / 24) + 1}`;
  }
}
