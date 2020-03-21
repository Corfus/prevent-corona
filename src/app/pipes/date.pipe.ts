import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return 'Tag ' + Math.floor(value / 24) + ' - ' + value % 24 + ':00 Uhr';
  }

}
