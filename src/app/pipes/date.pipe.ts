import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(tick: number, ...args: unknown[]): string {
    const hour = tick % 24;
    return  `Tag ${Math.floor(tick / 24) + 1} - ${hour < 10 ? 0 : ''}${hour}:00 Uhr`;
  }

}
