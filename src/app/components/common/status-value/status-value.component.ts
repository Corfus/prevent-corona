import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-value',
  templateUrl: './status-value.component.html',
  styleUrls: ['./status-value.component.scss']
})
export class StatusValueComponent {
  @Input() value: number | string;
  @Input() postfix: string;
  @Input() name: string;
  @Input() icon: string;
  @Input() inverted = false;
}
