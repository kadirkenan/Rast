import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseSocialName'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | null): string {
    return value ? value.toUpperCase() : '';
  }

}
