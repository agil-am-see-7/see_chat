import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit{
  constructor() {}
  myVariable:string = "";

  onEnterPressed(event: Event): void {
    const keyboardEvent = event as KeyboardEvent; // Cast the event to KeyboardEvent
    if (keyboardEvent.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior (new line in textarea)
      this.myVariable += '\n'; // Add a new line character to the text
    }
  }
  convertNewlinesToBr(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
  ngOnInit() {
    
  }
}
