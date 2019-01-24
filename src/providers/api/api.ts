import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  body:any;
  body2:any;
  body3:any = [];
  // bodyJSON:JSON

  constructor(public http:Http) {
    console.log('Hello ApiProvider Provider');
  }

  public apiService(request,method) {

    let promise = new Promise((resolve, reject) => {

       this.body = {
        "Email":"naveed@mail.com",
        "Password":"123",
        "Location":"24.8830857,67.0678734"
      }

      console.log(this.body);
      this.body2=JSON.stringify(this.body)

      console.log(this.body2);
      this.body3=JSON.parse(this.body2)

      console.log(this.body3);

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      // console.log(body);
      this.http.post('http://ayen.apptech.com.tr/ayen/Api/login',JSON.stringify(this.body),options)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
          },
          msg => { // Error
            console.log(msg);
          }
        );
    });
    //console.log(promise) ;
    return promise;


  }

}
