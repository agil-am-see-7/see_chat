import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  appText: string="";

  get chatMessage(): string{
    return this.appText;
  }

  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string){
    this.appText = value;
    this.chatMessageChange.emit(this.appText);
  }
}
