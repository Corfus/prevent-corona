import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-end-site-value',
  templateUrl: './end-site-value.component.html',
  styleUrls: ['./end-site-value.component.scss']
})
export class EndSiteValueComponent implements OnInit {

  @Input() imageSrc:number;
  @Input() score:number;

  constructor() { }

  ngOnInit(): void {
  }

}
