import { Component, inject } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'aq-quiz',
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  readonly quiz = inject(QuizService);
}
