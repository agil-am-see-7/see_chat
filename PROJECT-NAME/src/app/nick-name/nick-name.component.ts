import { Component, Input } from '@angular/core';
import { PersonService } from '../person.service';


var checkname: string ="";

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent {

  constructor(public pService: PersonService){
    this.pService.nickname = this.name;
  }

  public name: string = "";
  public a: boolean = false;

  @Input()
  set Nickname(value:string){
    this.name = value;
  }


  onPress(){
    checkname = this.name;
    this.a = match();
    if(this.a == true){
      this.pService.nickname = this.name;
    } else {
      this.pService.nickname = "";
      alert("Bitte geben Sie einen Nicknamen an der nur aus Buchstaben und Nummern besteht");
    }
  }
}

function match(){
  //console.log(checkname);
  var regex = /^[a-zA-Z0-9]+$/;
  if (regex.test(checkname)){
    return true;
  }else{
    return false;
  }
}
