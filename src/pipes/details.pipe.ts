import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detail'
})
export class DetailPipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    return Object.values(value).map((c) => c['name']).join(', ');
  }

}
