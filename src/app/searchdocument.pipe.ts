import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchdocument'
})
export class SearchdocumentPipe implements PipeTransform {

  transform(value: any, searchValue: any): any {


    if (value.length === 0) {
      return value;
    }
    return value.filter(function (search) {

      return (search.documentCategory.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || search.documentName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) 
   
  });


  }

}
