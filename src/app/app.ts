import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz } from './quiz/quiz';

@Component({
  selector: 'aq-root',
  imports: [RouterOutlet, Quiz],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //
}
