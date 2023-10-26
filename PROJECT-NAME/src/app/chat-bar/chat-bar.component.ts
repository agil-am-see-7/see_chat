import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {
  //variables
  message: string = "";
  characterCount: number = 0;

  get chatMessage(): string{
    return this.message;
  }

  //idk why it working but let Out and Input here!
  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string){
    this.message = value;
  }

  countCharacters() {
    this.characterCount = this.message.length;
  }

  // when Submit Button is clicked, it sends the data to the other components
  onPress(){
    this.chatMessageChange.emit(this.message.trim());
  }
}
