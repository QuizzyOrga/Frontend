import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, share, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getQuestionJson() {
    return this.http.get<any>('assets/questions.json');
  }

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
