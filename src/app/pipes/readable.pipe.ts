import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'readable'
})
export class ReadablePipe implements PipeTransform {

  transform(value: number): string {
    value = Number(value) || 0;
    if (Math.abs(value) > 1000000000) {
      const mrd = Math.floor(value / 1000000000);
      return `${Number(mrd.toFixed(1))} Mrd`;
    } else if (Math.abs(value) > 1000000) {
      const mio = Math.floor(value / 1000000);
      return `${Number(mio.toFixed(1))} Mio`;
    } else if (Math.abs(value) > 1000) {
      const tsd = Math.floor(value / 1000);
      return `${Number(tsd.toFixed(1))} Tsd`;
    }
    return `${Number(value.toFixed(1))}`;
  }

}
