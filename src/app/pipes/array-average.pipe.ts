import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayAverage'
})
export class ArrayAveragePipe implements PipeTransform {

  transform(array: any[], ...args: any[]): any {
    const total = array.reduce((a, b) => a + b, 0);
    return array.length > 0 ? (total / array.length).toFixed(1) : 'None';
  }

}
