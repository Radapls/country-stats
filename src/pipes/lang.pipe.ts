import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lang',
    standalone: false
})
export class LangPipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    return Object.values(value).join(', ');
  }

}
