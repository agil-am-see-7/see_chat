import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';
import { ChatAlertService } from '../chat-alert.service';


var checkname: string ="";

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent {

  constructor(public pService: PersonService, public cService: ChatAlertService){
    this.pService.nickname = this.name;
    this.cService.ChatAlert = this.Alert;
  }

  public name: string = "";
  public Cname: string = "";
  public Alert: string = "";
  public booleanTest: boolean = false;

  @Input()
  set Nickname(value:string){
    this.name = value;
  }

  @Output()
  NicknameChange = new EventEmitter<any>();


  onPress(){
    checkname = this.name;
    this.booleanTest = match();
    if(this.booleanTest == true){

      //this.cService.ChatAlert = "Name wurde Gesetzt";
      this.pService.nickname = this.name;
      if(this.Cname === ""){
        this.Cname = this.pService.nickname;
        this.cService.ChatAlert = this.name + " ist dem Chat beigetreten.";
        this.cService.MkAlert();

      }
      if(this.Cname != this.pService.nickname){
        this.cService.ChatAlert = this.Cname + " heisst nun " + this.name +" !";
        this.Cname = this.pService.nickname;
        this.cService.MkAlert();
      }
    } else {
      this.pService.nickname = "";
      alert("Bitte geben Sie einen Nicknamen an der nur aus Buchstaben und Nummern besteht");
    }
  }
}

//Function which observes the Username of the Chatter and filters it.
function match(){
  var regex = /^[a-zA-Z0-9äöüÄÖÜß]+$/;
  if (regex.test(checkname)){
    return true;
  }else{
    return false;
  }
}
