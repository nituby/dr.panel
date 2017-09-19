import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
// import { PlatformService } from 'buzzyears.ui';
import { Observable } from 'rxjs/Observable';
// import { environment } from '../../../environments/environment';

@Injectable()
export class APIService {

  public static getServerUrl(uri: string): string {
    return "sdasd";
  }

  constructor(protected http: Http) {
  }

//   get token(): string {
//     return this.platformService.token;
//   }

  get headers(): Headers {
    return new Headers({ 'Content-Type': 'application/json' });
  }

  get requestOptions(): RequestOptions {
    const headers = this.headers;
    // headers.append('Authorization', 'Bearer ' + this.token);
    headers.append('Access-Control-Allow-Origin', '*');

    return new RequestOptions({ headers: headers });
  }

  protected handleErrorObservable(error: Response | any) {
    return Observable.throw(error.message || error);
  }

  protected handleError(response: Response): Promise<any> {
    const isJson = /json/.test(response.headers.get('Content-Type')),
      error = isJson ? response.json() : 'Unknown Error';

    return Promise.reject(error.message || error);
  }

}
