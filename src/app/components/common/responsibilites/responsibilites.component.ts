import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-responsibilites',
  templateUrl: './responsibilites.component.html',
  styleUrls: ['./responsibilites.component.scss']
})
export class ResponsibilitesComponent implements OnInit {
  @Input() stateCapital = 0;
  @Input() acceptance = 0;
  @Input() happiness = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
