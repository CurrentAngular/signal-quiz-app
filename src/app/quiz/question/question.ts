import { Component, inject } from '@angular/core';
import { Answer } from '../answer/answer';
import { Quiz as service } from '../services/quiz';

@Component({
  selector: 'aq-question',
  imports: [Answer],
  templateUrl: './question.html',
  styleUrl: './question.scss',
})
export class Question {
  readonly quiz = inject(service);
}
