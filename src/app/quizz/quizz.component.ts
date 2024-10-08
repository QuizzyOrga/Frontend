import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { QuizService } from '../services/quiz.service';
import type {
  FireworksDirective,
  FireworksOptions,
} from '@fireworks-js/angular';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public quiz: any = {};
  public currentQuestion: number = 0;
  public points: number = 0;
  idQuiz: number = 1;
  codeQuiz: string = '';
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  afficherRep: boolean = false;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  subscription: Subscription | undefined;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.subscription = this.route.params.subscribe((params: any) => {
      if (this.isNumeric(params['id'])) {
        this.idQuiz = Number(params['id']);
        this.quizService.getQuiz(this.idQuiz).subscribe((res) => {
          this.quiz = res;
          this.questionList = res.questions;
        });
      } else {
        this.codeQuiz = params['id'];
        this.quizService.getQuiz(this.codeQuiz).subscribe((res) => {
          this.questionList = res.questions;
          this.quiz = res;
        });
      }
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.isCorrect) {
      this.points += 10;
      this.correctAnswer++;
      this.afficherRep = true;
      this.enabled = true;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
        this.enabled = false;
      }, 7000);
    } else {
      this.afficherRep = true;
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 8000);

      // this.points -= 10;
    }
  }

  startCounter() {
    this.afficherRep = false;
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        // this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }
  getProgressPercent() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }

  enabled = true;
  options: FireworksOptions = {
    opacity: 0.5,
  };

  @ViewChild('fireworks') fireworks?: FireworksDirective;

  public toggleFireworks(): void {
    this.enabled = !this.enabled;
  }

  public waitStop(): void {
    this.fireworks?.waitStop();
  }

  isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };
}
