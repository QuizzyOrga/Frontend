import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, share, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.urlApi + 'quiz/').pipe(
      map((resp: any) => resp),
      share(),
      take(1)
    );
  }

  getQuiz(idQuiz: number): Observable<any> {
    return this.http.get(this.urlApi + 'quiz/' + Number(idQuiz)).pipe(
      map((resp: any) => resp),
      share(),
      take(1)
    );
  }
}
