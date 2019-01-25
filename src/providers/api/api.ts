import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class ApiProvider {

  APILink: string = 'http://ayen.apptech.com.tr/ayen/Api/';
  body: any;

  // bodyJSON:JSON

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  public loginService(afterLink,body) {

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.APILink + afterLink , JSON.stringify(body), options)
        .toPromise()
        .then((response) => {
          console.log('API Response from '+afterLink+ ': ', response.json());
          resolve(response.json());
        })
        .catch((error) => {
          console.error('API Error from '+afterLink+ ': ', error.status);
          console.error('API Error from '+afterLink+ ', ', JSON.stringify(error));
          reject(error);
        });
    });


  }

}
