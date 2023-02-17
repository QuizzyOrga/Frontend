import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interface';
import { DataService } from 'src/app/services/data.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  codePrivate: string = '';
  constructor(
    private quizService: QuizService,
    private dataService: DataService
  ) {}

  searchQuizResults: any;
  quizs: Quiz[] | undefined;

  ngOnInit(): void {
    this.quizService.getAll().subscribe((res) => {
      this.quizs = res;
    });

    this.dataService.data$.subscribe((data) => {
      this.searchQuizResults = data;
    });
  }
}
