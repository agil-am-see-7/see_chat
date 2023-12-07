import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ChatAlertService } from '../chat-alert.service';
import { PersonService } from '../person.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent {
  //variables
  message: string = "";
  characterCount: number = 0;
  
  constructor(public cService: ChatAlertService, public pService: PersonService,public chatService: ChatService){
  }

  get chatMessage(): string{
    return this.message;
  }

  //idk why it working but let Out and Input here!
  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value:string){
    this.message = value;
    let msgObj: Message = {message:'', nickname:'', date: new Date};

    msgObj.nickname = this.pService.nickname;
    this.chatService.addToHistory(msgObj).subscribe(
      (response: Message) => {
        console.log("eppis" + response);
      }
    )
  }

  countCharacters() {
    this.characterCount = this.message.length;
  }
  feuern() {
    const wortObjekt = {
      "woerter": ["Hurensohn", "Arschgesicht", "Schnäbikätscher", "Mongo", "Nutte", "St. Galler"]
    };
    const zufaelligesWort = wortObjekt.woerter[Math.floor(Math.random() * wortObjekt.woerter.length)];
    this.cService.newCard(this.pService.nickname + ": ","Du " + zufaelligesWort + "!");
  }

  // when Submit Button is clicked, it sends the data to the other components
  onPress(){
    if (this.message.trim() != "") {


      this.chatMessageChange.emit(this.message.trim());
      setTimeout(() => {
        this.chatMessage = "";
        this.characterCount = 0;
        this.chatMessageChange.emit(this.chatMessage = "");
      }, 10);      
    }
  }
}