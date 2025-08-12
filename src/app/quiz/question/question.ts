import { Component } from '@angular/core';
import { Answer } from '../answer/answer';

@Component({
  selector: 'aq-question',
  imports: [Answer],
  templateUrl: './question.html',
  styleUrl: './question.scss'
})
export class Question {}
