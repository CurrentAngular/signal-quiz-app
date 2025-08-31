import { Component, inject } from '@angular/core';
import { QuizService } from '../services';

@Component({
  selector: 'aq-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrl: './error-notification.component.scss',
})
export class ErrorNotification {
  readonly store = inject(QuizService);
}
