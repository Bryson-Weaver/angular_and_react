import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messageInput = '';
  displayMessage = 'Hello World';

  onDisplayMessage(): void {
    this.displayMessage = this.messageInput;
  }
}
