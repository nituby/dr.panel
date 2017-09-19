import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { APIService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class DrService extends APIService {

  constructor(http: Http) { 
    super(http);
  }

  // create(data: any): Promise<any> {
  //   return this.http.post(APIService.getServerUrl(this.serviceEndpoint() + ''), JSON.stringify(data), this.requestOptions)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(error => this.handleError);
  // }

  // update(data: any): Promise<any> {
  //   return this.http.put(APIService.getServerUrl(this.serviceEndpoint() + '/' + data.id), JSON.stringify(data), this.requestOptions)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(error => this.handleError);
  // }

  // getWorkflow(id: string): Observable<any> {
  //   return this.http.get(APIService.getServerUrl(this.serviceEndpoint() + '/' + id), this.requestOptions)
  //     .map(res => res.json())
  //     .catch(this.handleErrorObservable);
  // }

  // searchWorkflowsWithoutData(): Observable<any> {
  //   return this.http.post(APIService.getServerUrl(this.serviceEndpoint() + '/search'), '', this.requestOptions)
  //     .map(res => res.json());
  // }

  // searchWorkflow(searchData: any): Observable<any> {
  //   return this.http.post(APIService.getServerUrl(this.serviceEndpoint() + '/search'), searchData, this.requestOptions)
  //     .map(res => res.json());
  // }

  // remove(id: string): Promise<any> {
  //   return this.http.delete(APIService.getServerUrl(this.serviceEndpoint() + '/' + id), this.requestOptions)
  //     .toPromise()
  //     .then(response => response)
  //     .catch(error => this.handleError);
  // }

  // createTest(data: any): Promise<any> {
  //   return this.http.post(APIService.getServerUrl(this.serviceEndpoint() + '/test/create'), JSON.stringify(data), this.requestOptions)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(error => this.handleError);
  // }


  getUsers(): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.get(this.Url, this.requestOptions)
      .map(res => res.json())
     
  }

  // getTestById(id: string): Observable<any> {
  //   return this.http.get(APIService.getServerUrl(this.serviceEndpoint() + '/test/' + id), this.requestOptions)
  //     .map(res => res.json())
  //     .catch(this.handleErrorObservable);
  // }

  get Url() {
    return "http://dynamicreports.signupbuzz.com/designer/json/users?_dc=1505803194346&userId=131620361&reportId=11940&page=1&start=0&limit=25";
  }
  serviceEndpoint(): string {
    return 'v1/workflow';
  }

}

