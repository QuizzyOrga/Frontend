import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, share, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.urlApi + 'users/').pipe(
      map((resp: any) => resp),
      share(),
      take(1)
    );
  }

  getUser(idUsers: any): Observable<any> {
    return this.http.get(this.urlApi + 'users/' + idUsers).pipe(
      map((resp: any) => resp),
      share(),
      take(1)
    );
  }
}
