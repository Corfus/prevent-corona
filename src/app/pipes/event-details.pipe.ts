import { Pipe, PipeTransform } from '@angular/core';

export class EventDetails {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}


@Pipe({
  name: 'eventDetails'
})
export class EventDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  //value[0]
    return null; //title, desc, icon
  }

}
