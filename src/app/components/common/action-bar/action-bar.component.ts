import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EActionCategory} from '../action-space/action-space.component';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Output() categorySelected: EventEmitter<EActionCategory> = new EventEmitter<EActionCategory>();

  constructor() { }

  ngOnInit(): void {
  }

  propagandaClicked(): void {
    this.categorySelected.emit(EActionCategory.Propaganda);
  }

  decisionsClicked(): void {
    this.categorySelected.emit(EActionCategory.Decisions);
  }

  researchClicked(): void {
    this.categorySelected.emit(EActionCategory.Research);
  }

}
