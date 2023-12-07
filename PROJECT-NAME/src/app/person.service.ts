import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  private userCounts: Record<string, number> = {};
  
  private myNickname: string = "";
  
  public get nickname(): string {
    return this.myNickname;
  }
  
  public set nickname(value: string) {
    this.myNickname = value;
  }
  
  public Ranking() {
    if (this.nickname) {
      this.userCounts[this.nickname] = (this.userCounts[this.nickname] || 0) + 1;
    }

    // Sort usernames based on counts in descending order
    const sortedUsernames = Object.keys(this.userCounts).sort((a, b) => this.userCounts[b] - this.userCounts[a]);

    // Get the top 5 usernames
    const top5Usernames = sortedUsernames.slice(0, 5);

    // Update the ranking in the text content
    const rankID = document.getElementById('rank');
    if (rankID) {
      const rankingText = top5Usernames.map((username, index) => `${index + 1}. ${username}`).join(', ');
      rankID.textContent = rankingText;
    }
  }
}
