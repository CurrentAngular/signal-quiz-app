import { Component, inject } from '@angular/core';
import { Question } from './question/question';
import { Quiz as service } from './services/quiz';

@Component({
  selector: 'aq-quiz',
  imports: [Question],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {
  readonly quiz = inject(service);
}
