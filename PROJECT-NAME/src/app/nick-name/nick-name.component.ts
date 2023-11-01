import { Component, Input } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent {
  
  constructor(public pService: PersonService){
    this.pService.nickname = this.name;
  }

  name: string = ""; 

  @Input()
  set Nickname(value:string){
    this.name = value;
  }

  onPress(){
    this.pService.nickname = this.name;
    //console.log("nickname-Component " + this.pService.nickname);
  }
}
