// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Operator } from 'rxjs';

import { BuildCaseTest }           from '../buildCase/buildCaseTest';

@Injectable()
export class TestCaseService {
  constructor (private http: Http) {}

  private testUrl = 'app/buildCase/buildCaseTest.json';  // URL to web API

  getTest (): Promise<BuildCaseTest[]> {
    return this.http.get(this.testUrl)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }

  addTest (buildName: string, buildSelect: string, buildArea: number, buildLocation: string, buildCost: number, buildContent: string, buildImage: string): Promise<BuildCaseTest[]> {
    let body = JSON.stringify({ buildName, buildSelect, buildArea, buildLocation, buildCost, buildContent, buildImage });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.testUrl, body, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
