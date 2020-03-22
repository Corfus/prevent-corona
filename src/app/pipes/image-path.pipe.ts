import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let postfix = '';
    value = value || ' ';
    if (args && args.length > 0 && args[0].length > 0) {
      postfix = `_${args[0]}`;
    }
    value = (value[0]).toUpperCase() + (value).slice(1, (value).length);
    return `/assets/${value}${postfix}.svg`;
  }

}
