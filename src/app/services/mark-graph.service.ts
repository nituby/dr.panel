
import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MarkGraphService {
  private notify = new Subject<any>();
  private saveGraph = new Subject<any>();
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();
  saveGraphObservable$ = this.saveGraph.asObservable();

  constructor(){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

 public saveGraphOther(data: any) {
    if (data) {
      this.saveGraph.next(data);
    }
  }
}