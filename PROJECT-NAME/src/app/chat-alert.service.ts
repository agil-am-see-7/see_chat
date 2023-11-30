import { Injectable } from '@angular/core';

const MAX_CHILDREN = 3;

@Injectable({
  providedIn: 'root'
})
export class ChatAlertService {

  private chatAlertMsg: string = "";
  

  public get ChatAlert(): string {
    return this.chatAlertMsg;
  }

  public set ChatAlert(value: string) {
    this.chatAlertMsg = value;
  }

//Funtion which is publicly used to make alerts.
  public MkAlert() {
    const myrow = document.getElementById(`myrow`);
    const mycol = document.createElement(`div`);
    mycol.className = `col-12 p-2`;

    myrow!.appendChild(mycol);

    const mycard = document.createElement(`div`);
    mycard.className = `card m-0 text-center border-light bg-dark-subtle border-0`;

    mycol.appendChild(mycard);

    const mycardbody = document.createElement(`div`);
    mycardbody.className = `card-body m-0 p-0`;
    mycard.appendChild(mycardbody);
    mycardbody.innerHTML += `<p class="m-0 fw-light font-monospace text-body-secondary">${this.chatAlertMsg}</p>`;
  }
  public removeOldestCard() {
    const myrow = document.getElementById(`myrow`);
    const oldestCard = myrow?.firstChild;
  
    // Remove the oldest card if it exists
    if (oldestCard) {
      myrow?.removeChild(oldestCard);
    }
  }
  
  public removeOldestCardIfNeeded() {
    const myrow = document.getElementById(`myrow`);
    
    // Check if myrow exists and has more children than the allowed limit
    while (myrow && myrow.childElementCount > MAX_CHILDREN) {
      this.removeOldestCard();
    }
  }
  

}


