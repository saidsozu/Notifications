import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularnotifications';

  constructor(private notification: NotificationsService, public dialog: MatDialog) { }

  success() {
    this.notification.success('Submitted successfully');
  }

  warning() {
    this.notification.warn('Warning');
  }

  error(): void {
    this.dialog.open(DialogComponent);
  }
}
