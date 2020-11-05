import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, searchText: any): any {
    if (value.lenght === 0) { return value; }

    return value.filter(s =>
      s.TenBienThe.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
     
      );

    // return value.filter( function(search) {
    //   return search.CMND.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ;
    // }
  }

  // transform(value: any, filterString: string, propName: string): any[] {

  //   const resultArray = [];
  //   if (value.lenght === 0 || filterString === '' || propName === '') {
  //     return value;
  //   }

  //   for (const item of value) {
  //     if (item[propName] === filterString) {
  //       resultArray.push(item);
  //     }
  //   }
  //   return resultArray;
  // }
}
