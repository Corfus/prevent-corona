import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-value',
  templateUrl: './status-value.component.html',
  styleUrls: ['./status-value.component.scss']
})
export class StatusValueComponent {
  @Input() value: number;
  @Input() name: string;
  @Input() icon: string;
}
