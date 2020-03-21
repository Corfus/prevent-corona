import { Component, OnInit } from '@angular/core';

export enum EActionCategory {
  Unselected = -1,
  Propaganda,
  Decisions,
  Research
}

@Component({
  selector: 'app-action-space',
  templateUrl: './action-space.component.html',
  styleUrls: ['./action-space.component.scss']
})
export class ActionSpaceComponent implements OnInit {

  selectedCategory: EActionCategory = EActionCategory.Unselected;

  constructor() { }

  ngOnInit(): void {
  }

}
