import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterThuoc'
})
export class FilterThuocPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (value.lenght === 0) { return value; }

    return value.filter(s =>
      s.TenThuoc.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.CongDung.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }
}
