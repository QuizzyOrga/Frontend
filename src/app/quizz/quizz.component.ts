import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent {
  formData: FormGroup = new FormGroup({});
  subscription: Subscription | undefined;
  idQuiz: number = 1;
  idQuestion: number = 1;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.formData = this.fb.group({
      reponse: ['', Validators.required],
    });

    this.subscription = this.route.params.subscribe((params) => {
      this.idQuiz = Number(params['id']);
      this.idQuestion = Number(params['idQuestion']) | 1;
      if (this.idQuiz) {
        this.quizService
          .getQuestion(this.idQuiz, this.idQuestion)
          .subscribe((data) => {
            console.log(
              '🚀 ~ QuizzComponent ~ this.quizService.getById ~ data',
              data
            );
          });
      }
    });
  }

  onSubmit() {
    console.log(this.formData.value);

    const reponse = this.formData.value.reponse;
  }
}
