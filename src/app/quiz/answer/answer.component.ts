import { Component, inject } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'aq-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  readonly quiz = inject(QuizService);
}
