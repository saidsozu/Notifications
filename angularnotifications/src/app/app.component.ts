import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularnotifications';

  constructor(private notification: NotificationsService) { }

  success() {
    this.notification.success('Submitted successfully');
  }

  warning() {
    this.notification.warn('Warning');
  }

  error() {
    console.log('error()');
  }
}
