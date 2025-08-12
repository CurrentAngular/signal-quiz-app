import { Component, inject } from '@angular/core';
import { Quiz as service } from '../services/quiz';

@Component({
  selector: 'aq-answer',
  imports: [],
  templateUrl: './answer.html',
  styleUrl: './answer.scss',
})
export class Answer {
  readonly quiz = inject(service);
}
