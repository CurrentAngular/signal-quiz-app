import { Component } from '@angular/core';
import { Quiz } from './quiz/quiz';

@Component({
  selector: 'aq-root',
  imports: [Quiz],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
