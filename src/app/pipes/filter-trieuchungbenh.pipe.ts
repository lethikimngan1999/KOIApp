import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTrieuchungbenh'
})
export class FilterTrieuchungbenhPipe implements PipeTransform {
//   transform(items: any[], args: any[]): any {
//     return items.filter(item => item.TenBenh.indexOf(args.TenBenh) > -1);
// }
 
    transform(items: Array<any>, filter: {[key: string]: any },arrayValues): Array<any> {
      if(filter){        
        return items.filter(item => {
          console.log(item['TenBenh'])
          let notMatchingField = Object.keys(filter)
                                .find(key => filter[key].indexOf(item[key]) == -1);
                  return !notMatchingField;
        });
                 
    }else{
        let notMatchingField=items;
        return notMatchingField
      }    
    }
  }

