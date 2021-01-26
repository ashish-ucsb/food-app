import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.filter((item: any) => {
      return (
        item.restaurent_name.toUpperCase().indexOf(args[0].toUpperCase()) > -1
      );
    });
  }
}
