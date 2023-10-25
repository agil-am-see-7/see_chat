import { Component, Input, Output, EventEmitter} from '@angular/core';

var chattext: string;

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
      newCard()
    }
  }
}

function newCard() {
  const myrow = document.getElementById(`myrow`);
  const mycol = document.createElement(`div`);
  mycol.className = `col-12 p-2`;
  mycol.id = `mycol${1}`;
  myrow!.appendChild(mycol);
  
  const mycard = document.createElement(`div`);
  mycard.className = `card bg-body-tertiary`;
  mycard.id = `mycard${1}`;
  mycol.appendChild(mycard);

  const mycardbody = document.createElement(`div`);
  mycardbody.className = `card-body`;
  mycardbody.id = `mycardbody-${1}`;
  mycard.appendChild(mycardbody);

  mycardbody.innerHTML += `<h3 class="card-title">${chattext}</h3>`;
}