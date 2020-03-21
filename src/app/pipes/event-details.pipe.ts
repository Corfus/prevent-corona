import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventDetails'
})
export class EventDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
