import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {
  message: string = "";

  get chatMessage(): string{
    return this.message;
  }

  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string){
    this.message = value;
    this.chatMessageChange.emit(this.message);
  }

  characterCount: number = 0;

  countCharacters() {
    this.characterCount = this.message.length;
  }
}
