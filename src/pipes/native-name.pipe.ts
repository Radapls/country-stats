import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nativeName'
})
export class NativeNamePipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    return Object.values(value).map(c => c['official']).join(', ');
  }

}
