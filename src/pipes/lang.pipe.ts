import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    return Object.values(value).join(', ');
  }

}
