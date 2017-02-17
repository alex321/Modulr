import {Pipe, PipeTransform} from '@angular/core';
/**
 * Prettify sort code. Eg. 000000 becomes 00-00-00
 */
@Pipe({name: 'mySortCode'})
export class SortCodePipe implements PipeTransform {
  transform(value: string): string {
    return `${value.slice(0,2)}-${value.slice(2,4)}-${value.slice(4,6)}`;
  }
}
