import { Component, inject } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './services';
import { CongratulationsComponent } from './congratulations/congratulations.component';

@Component({
  selector: 'aq-quiz',
  imports: [QuestionComponent, CongratulationsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  readonly store = inject(QuizService);
}
