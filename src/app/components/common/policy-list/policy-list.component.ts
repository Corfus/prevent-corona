import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent {
  @Input() policies: Array<string> = [];
}
