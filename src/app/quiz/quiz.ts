import { Component } from '@angular/core';
import { Question } from './question/question';

@Component({
  selector: 'aq-quiz',
  imports: [Question],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss'
})
export class Quiz {}
