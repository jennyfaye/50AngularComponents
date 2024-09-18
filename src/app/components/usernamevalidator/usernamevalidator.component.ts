import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  validityMessage: string = '';

  private readonly MIN_LENGTH: number = 5;
  private readonly MAX_LENGTH: number = 15;
  private readonly ALLOWED_CHARACTERS: RegExp = /^[a-zA-Z0-9_]+$/;

  checkUsername() {
    if (this.username.length < this.MIN_LENGTH) {
        this.validityMessage = `Username must be at least ${this.MIN_LENGTH} characters long.`;
      } else if (this.username.length > this.MAX_LENGTH) {
        this.validityMessage = `Username must be no more than ${this.MAX_LENGTH} characters long.`;
      } else if (!this.ALLOWED_CHARACTERS.test(this.username)) {
        this.validityMessage = 'Username can only contain letters, numbers, and underscores.';
      } else {
      this.validityMessage = 'Username is valid!';
    }
  }
}
