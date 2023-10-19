import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit{
  myVariable:string = "";
  characterCount: number = 0;

  clearMyVariable() {
    this.myVariable = "";
  }

  countCharacters() {
    this.characterCount = this.myVariable.length;

    /*     if (this.characterCount === 120) {
          this.myVariable += '\n';
        } */
  }

  onEnterPressed(event: Event): void {
    const keyboardEvent = event as KeyboardEvent; // Cast the event to KeyboardEvent
    if (keyboardEvent.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior (new line in textarea)
      this.myVariable += '\n'; // Add a new line character to the text
      this.characterCount = 0;
    }
  }
  convertNewlinesToBr(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
  ngOnInit() {

  }
}

