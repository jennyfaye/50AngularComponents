import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
  username: string = '';
  displayedUsername: string | null = null;

  displayUsername() {
    if (this.username) {
      this.displayedUsername = this.username;
      console.log("Username Displayed")
    } else {
      this.displayedUsername = null;
      console.log("Username Not Displayed")
    }
  }
}
