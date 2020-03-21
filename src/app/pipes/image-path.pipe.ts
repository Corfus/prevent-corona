import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value[0].toUpperCase() + value.slice(1, value.length);
    console.log(value);
    return `/assets/${value}.svg`;
  }

}
