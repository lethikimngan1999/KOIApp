import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNV'
})
export class FilterNVPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (value.lenght === 0) { return value; }

    return value.filter(s =>
      s.TenNhanVien.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.CMND.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.Sdt.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.Email.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
      );

    // return value.filter( function(search) {
    //   return search.CMND.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ;
    // }
  }
}
