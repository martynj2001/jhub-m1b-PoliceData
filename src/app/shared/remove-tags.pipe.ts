import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {

  transform(str: string) {

    if ((str === null) || (str === '')){
      return "No information held by data.police.uk"
    }
    str = str.toString();
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    // snippet from www.geeksforgeekd.org
    return str.replace( /(<([^>]+)>)/ig, '');
  }

}
