import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBenh'
})
export class FilterBenhPipe implements PipeTransform {

 
  transform(value: any, searchText: any): any {
    if (value.lenght === 0) { return value; }

    return value.filter(s =>
      s.TenBenh.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.NguyenNhan.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
   //   s.ListThuocs.TenThuoc.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }


}
