import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string,limit?:number){
    let limitnumber:number;
    if(!value) return null;
    else
    {
      if(!limit)
        limitnumber=6;
      else limitnumber=limit;

      return value.substr(0,limitnumber)+" ...";
    }
  }

}
