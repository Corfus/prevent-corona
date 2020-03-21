import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-catalog',
  templateUrl: './action-catalog.component.html',
  styleUrls: ['./action-catalog.component.scss']
})
export class ActionCatalogComponent implements OnInit {
  @Input() actionList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
