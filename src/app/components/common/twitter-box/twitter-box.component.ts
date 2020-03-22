import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-twitter-box',
  templateUrl: './twitter-box.component.html',
  styleUrls: ['./twitter-box.component.scss']
})
export class TwitterBoxComponent {
  @Input() set eventId(id: string) {
    this._eventId = id;
    this.retweets = Math.floor(Math.random() * 100000);
    this.likes = Math.floor(Math.random() * 6000000);
    console.log(this.eventId);
    this.showBell = true;
    setTimeout(() => this.showBell = false, 3500);
  }

  get eventId(): string {
    return this._eventId;
  }

  @Input() userName: string;
  @Input() dateTime: string;

  likes: number;
  retweets: number;
  showBell = true;

  private _eventId: string;


  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
