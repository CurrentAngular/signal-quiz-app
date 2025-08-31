import { Component, inject, OnInit } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './services';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { QuestionInterface } from './types';

@Component({
  selector: 'aq-quiz',
  imports: [QuestionComponent, CongratulationsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  readonly store = inject(QuizService);

  // TODO: try to move into service
  ngOnInit(): void {
    this.store.getQuestions().subscribe((questions: QuestionInterface[]) => {
      this.store.setQuestions(questions);
    });
  }
}
