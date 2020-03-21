import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-box',
  templateUrl: './twitter-box.component.html',
  styleUrls: ['./twitter-box.component.scss']
})
export class TwitterBoxComponent implements OnInit {

  @Input() text:string;
  @Input() userName:string;

  constructor() { }

  ngOnInit(): void {
  }

}
