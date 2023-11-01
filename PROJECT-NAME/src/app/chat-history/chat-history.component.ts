import { Component, Input, Output, EventEmitter} from '@angular/core';
import { PersonService } from '../person.service';

var chattext: string;
var nickname: string;

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  public appText: string="";
  theHistory: string="";

  get chatMessage(): string{
    return this.appText;
  }

  @Input()
  set chatMessage(value:string){
    this.appText = value;
    if(this.appText === this.theHistory) {
    } else {
      this.theHistory = this.theHistory.concat(" ",this.appText);
      //this.theHistory = this.theHistory.concat("\n");
      chattext = this.appText;
      nickname = this.pService.nickname;
      newCard()
    }
  }

  constructor(public pService: PersonService){
    nickname = this.pService.nickname;
  }
  
}


function newCard() {
  const myrow = document.getElementById(`myrow`);
  const mycol = document.createElement(`div`);
  mycol.className = `col-12 p-2`;
  
  myrow!.appendChild(mycol);
  
  const mycard = document.createElement(`div`);
  mycard.className = `card bg-body-tertiary`;

  mycol.appendChild(mycard);

  const mycardbody = document.createElement(`div`);
  mycardbody.className = `card-body`;
  mycard.appendChild(mycardbody);

  mycardbody.innerHTML += `<p class="m-0">${nickname + ": " + chattext}</p>`;
}