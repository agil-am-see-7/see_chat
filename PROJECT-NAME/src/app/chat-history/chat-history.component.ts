import { Component, Input, Output, EventEmitter} from '@angular/core';
import { PersonService } from '../person.service';
import { ChatAlertService } from '../chat-alert.service';

var chattext: string;
var nickname: string = "";
const escapedChatText = document.createElement('div');


@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {

  constructor(public pService: PersonService, public cService: ChatAlertService){
    nickname = this.pService.nickname;
  }

  public appText: string="";
  theHistory: string="";

  get chatMessage(): string{
    return this.appText;
  }

  @Input()
  set chatMessage(value:string){
    if (value.trim() === ""){
    } else{
      this.appText = value;
      nickname = this.pService.nickname;
      if(this.appText === this.theHistory) {
        throw new Error('Chat Nachricht kann nicht leer sein.');
      } else {
        this.theHistory = this.theHistory.concat(" ",this.appText);
        chattext = this.appText;
        if (nickname != "") {
          newCard();
          //removeOldestCardIfNeeded()
          this.cService.removeOldestCardIfNeeded();
        }
        else{
          alert("Bitte setze zuerst einen Nickname!")
          //this.cService.ChatAlert = "Bitte setze zuerst einen Nickname!";
          //this.cService.MkAlert();
        }
      }
    }
  }
}
function newCard() {
  var today = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString().slice(0, 5);
  const myrow = document.getElementById(`myrow`);
  const mycol = document.createElement(`div`);
  mycol.className = `col-12 p-2 border-0`;

  myrow!.appendChild(mycol);

  const mycard = document.createElement(`div`);
  mycard.className = `card bg-body-tertiary border-0`;

  mycol.appendChild(mycard);

  const mycardbody = document.createElement(`div`);
  mycardbody.className = `card-body row p-1 border-0`;
  mycard.appendChild(mycardbody);

  escapedChatText.textContent = chattext;
  mycardbody.innerHTML += `<p class="m-0 col-12 border-0">
  <span class="text-dark fs-4 fw-bolder">${nickname + ": "}</span>
  <span class="fs-5">${escapedChatText.innerHTML}</span>
  </p>`;
  mycardbody.innerHTML += `<p class="m-0 py-0 col-12 text-end fw-light font-monospace "><span>${today}</span></p>`;
}
