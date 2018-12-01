import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http:Http) {
    console.log('Hello ApiProvider Provider');
  }

  public apiService(request,method) {

    let promise = new Promise((resolve, reject) => {

      let body = "method=" + method + "&body=" + request;


      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });
      // console.log(body);
      this.http.post('https://bahjahcards.com//translateAPI/', body, options)
        // .timeout(100000)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    //console.log(promise) ;
    return promise;


  }

}
