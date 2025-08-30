import { computed, Injectable, signal } from '@angular/core';
import { QuestionInterface } from '../types';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  #currentQuestionIndex = signal(0);

  #mockQuestions(): QuestionInterface[] {
    return [
      {
        question: 'What does CSS stand for?',
        incorrectAnswers: [
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
      },
      {
        question:
          'Where in an HTML document is the correct place to refer to an external style sheet?',
        incorrectAnswers: [
          'In the <body> section',
          'At the end of the document',
          "You can't refer to an external style sheet",
        ],
        correctAnswer: 'In the <head> section',
      },
      {
        question: 'Which HTML tag is used to define an internal style sheet?',
        incorrectAnswers: ['<script>', '<headStyle>', '<css>'],
        correctAnswer: '<style>',
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
        incorrectAnswers: ['class', 'font', 'styles'],
        correctAnswer: 'style',
      },
      {
        question: 'Which is the correct CSS syntax?',
        incorrectAnswers: [
          '{body:color=black;}',
          '{body;color:black;}',
          'body:color=black;',
        ],
        correctAnswer: 'body {color: black;}',
      },
      {
        question: 'How do you insert a comment in a CSS file?',
        incorrectAnswers: [
          "' this is a comment",
          '// this is a comment',
          '// this is a comment //',
        ],
        correctAnswer: '/* this is a comment */',
      },
      {
        question: 'Which property is used to change the background color?',
        incorrectAnswers: ['color', 'bgcolor', 'bgColor'],
        correctAnswer: 'background-color',
      },
      {
        question: 'How do you add a background color for all <h1> elements?',
        incorrectAnswers: [
          'all.h1 {background-color:#FFFFFF;}',
          'h1.setAll {background-color:#FFFFFF;}',
          'h1.all {background-color:#FFFFFF;}',
        ],
        correctAnswer: 'h1 {background-color:#FFFFFF;}',
      },
    ];
  }

  /** Массив вопросов */
  readonly questions = signal(this.#mockQuestions()).asReadonly();

  /** Колличество вопросов */
  readonly questionsCount = signal(this.#mockQuestions().length).asReadonly();

  /** Индекс текущего вопроса для отображения в UI */
  readonly currentQuestionIndexToShow = computed(
    () => this.#currentQuestionIndex() + 1,
  );

  /** Текущий вопрос */
  readonly currentQuestion = computed(
    () => this.#mockQuestions()[this.#currentQuestionIndex()].question,
  );

  /** Индекс текущего вопроса */
  readonly currentQuestionIndex = signal(
    this.#currentQuestionIndex(),
  ).asReadonly();

  /** Переход к следующему вопросу */
  nextQuestion(): void {
    const currentIndex = this.showResult()
      ? this.#currentQuestionIndex()
      : this.#currentQuestionIndex() + 1;
    this.#currentQuestionIndex.set(currentIndex);
  }

  /** Перезапуск игры */
  restart(): void {
    this.#currentQuestionIndex.set(0);
  }

  readonly showResult = computed(
    () => this.#currentQuestionIndex() === this.#mockQuestions().length - 1,
  );

  readonly currentQuestionAnswers = computed(() => [
    this.#mockQuestions()[this.#currentQuestionIndex()].correctAnswer,
    ...this.#mockQuestions()[this.#currentQuestionIndex()].incorrectAnswers,
  ]);
}
