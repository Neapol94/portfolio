import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  public returnYearsOrMonths(dateBegin: Date, dateEnd: Date): string{
    const monthsDiff = Math.floor(Math.abs(<any>dateBegin - <any>dateEnd) / (1000*60*60*24*30));
    if(monthsDiff >= 12){
      return Math.floor(monthsDiff/12).toString() + " years " + (monthsDiff % 12).toString() + " months";
    }else{
      return (monthsDiff).toString() + " months";
    }
  }
}
