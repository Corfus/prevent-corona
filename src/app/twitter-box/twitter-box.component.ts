import { Component, OnInit, Input } from '@angular/core';
import { ActionDetailsPipe } from '../pipes/action-details.pipe';

@Component({
  selector: 'app-twitter-box',
  templateUrl: './twitter-box.component.html',
  styleUrls: ['./twitter-box.component.scss']
})
export class TwitterBoxComponent implements OnInit {

  @Input() eventId:string;
  @Input() userName:string;
  @Input() dateTime:string;

  likes:number;
  retweets:number;
  eventText:string;

  constructor() 
  {
    this.retweets = Math.floor(Math.random() * 100000);
    this.likes = Math.floor(Math.random() * 6000000);
    let pipe = new ActionDetailsPipe();
    this.eventText = pipe.transform("eventId");
  }

  ngOnInit(): void {
  }


  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
