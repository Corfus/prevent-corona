import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-end-site-value',
  templateUrl: './end-site-value.component.html',
  styleUrls: ['./end-site-value.component.scss']
})
export class EndSiteValueComponent {
  @Input() image: string;
  @Input() score: number;
  @Input() postfix: string;
}
