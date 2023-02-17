import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interface';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  codePrivate: string = '';
  constructor(private quizService: QuizService) {}

  quizs: Quiz[] | undefined;

  ngOnInit(): void {
    this.quizService.getAll().subscribe((res) => {
      this.quizs = res;
      console.log(
        '🚀 ~ CardComponent ~ this.quizService.getAll ~ this.quizs',
        this.quizs
      );
    });
  }
}
