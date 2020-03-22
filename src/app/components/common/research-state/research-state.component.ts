import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-research-state',
  templateUrl: './research-state.component.html',
  styleUrls: ['./research-state.component.scss']
})
export class ResearchStateComponent {
  @Input() vaccines = 0;
  @Input() medicine = 0;
}
