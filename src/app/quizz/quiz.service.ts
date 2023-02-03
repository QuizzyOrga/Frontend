import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, share, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
    return this.http.get(this.urlApi + 'quiz/' + Number(id)).pipe(
      map((resp: any) => resp),
      share(),
      take(1)
    );
  }

  getQuestion(id: number, idQuestion: number): Observable<any> {
    return this.http
      .get(this.urlApi + 'quiz/' + Number(id) + '/questions/' + idQuestion)
      .pipe(
        map((resp: any) => resp),
        share(),
        take(1)
      );
  }
}
