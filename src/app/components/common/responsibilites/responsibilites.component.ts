import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-responsibilites',
  templateUrl: './responsibilites.component.html',
  styleUrls: ['./responsibilites.component.scss']
})
export class ResponsibilitesComponent implements OnInit {
  @Input() stateCapital = '';
  @Input() acceptance = '';
  @Input() happiness = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
