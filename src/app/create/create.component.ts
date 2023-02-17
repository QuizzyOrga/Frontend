import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { QuizService } from '../services/quiz.service';
import type {
  FireworksDirective,
  FireworksOptions,
} from '@fireworks-js/angular';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateQuizzComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  inputs = [{ id: 'input1', value: '' }];

  addInput() {
    this.inputs.push({ id: `input${this.inputs.length + 1}`, value: '' });
  }
}
