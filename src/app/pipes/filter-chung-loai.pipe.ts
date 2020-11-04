import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChungLoai'
})
export class FilterChungLoaiPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (value.lenght === 0) { return value; }

    return value.filter(s =>
      s.TenChungLoai.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      s.MauSac.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }

}
