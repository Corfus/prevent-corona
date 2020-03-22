import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'readable'
})
export class ReadablePipe implements PipeTransform {

  transform(value: number): string {
    if (value > 1000000000) {
      const mio = Math.floor(value / 1000000000);
      return `${mio} Mrd`;
    } else if (value > 1000000) {
      const mio = Math.floor(value / 1000000);
      return `${mio} Mio`;
    } else if (value > 1000) {
      const tsd = Math.floor(value / 1000);
      return `${tsd} Tsd`;
    }
    return `${value}`;
  }

}
