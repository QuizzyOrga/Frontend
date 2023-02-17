import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable();

  setData(data: string) {
    this.dataSubject.next(data);
  }
}
