import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../model/employee.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPosterService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  private handleErrors(error: any) {
    console.log('post error: ', error);
    return Observable.throw(error.statusText);
  }

  postEmployee(employee: Employee): Observable<any> {
    const body = JSON.stringify(employee);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post('http:localhost:3000/postEmployee', body, options)
      .map(this.extractData)
      .catch(this.handleErrors);
  }

}
