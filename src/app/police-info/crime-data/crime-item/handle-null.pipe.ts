import { Pipe, PipeTransform } from '@angular/core';
import { CrimeOutcome } from '../../crime-data.model';

@Pipe({
  name: 'handleNull'
})
export class HandleNullPipe implements PipeTransform {

  transform(value: CrimeOutcome): string{

    if (value === null){
      return "No data held";
    }else{
      return value.category;
    }
    
  }

}
