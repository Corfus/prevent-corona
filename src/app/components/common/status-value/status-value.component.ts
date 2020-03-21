import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-value',
  templateUrl: './status-value.component.html',
  styleUrls: ['./status-value.component.scss']
})
export class StatusValueComponent implements OnInit {

  @Input() value: number;
  @Input() name: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
