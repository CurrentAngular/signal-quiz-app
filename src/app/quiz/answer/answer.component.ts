import { Component, computed, inject, input } from '@angular/core';
import { QuizService } from '../services';

@Component({
  selector: 'aq-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  readonly #store = inject(QuizService);
  readonly answer = input.required<string>();
  readonly index = input.required<number>();

  readonly #LETTERS = ['a', 'b', 'c', 'd'];

  readonly letter = computed(() => this.#LETTERS[this.index()].toUpperCase());
}
