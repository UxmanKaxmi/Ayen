import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelpersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpersProvider {

  public effect : any;
  // public cssClass : string;
  constructor(public http: HttpClient) {
    console.log('Hello HelpersProvider Provider');
  }


  // public animation(effect : string,cssClass){
  //   cssClass = "animated " + effect;

  // }

}
