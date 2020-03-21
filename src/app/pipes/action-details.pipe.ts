import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actionDetails'
})
export class ActionDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
