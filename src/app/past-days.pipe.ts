import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDays'
})
export class PastDaysPipe implements PipeTransform {

  transform(value: any): number {
    let todayDate:Date = new Date();
    let dateInNum:any = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
    var countDay= Math.floor((dateInNum - value) /(1000 * 60 * 60 * 24));

    if (countDay >= 1 && value < dateInNum){
      return countDay;
    }else{
      return 0;
    }

  }

}
