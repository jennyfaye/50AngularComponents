import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  guess: number | null = null;
  targetNumber: number = 28;
  feedback: string = '';

  checkGuess() {
    if (this.guess === null) {
      this.feedback = 'Enter a valid number!';
      return;
    }

    if (this.guess > this.targetNumber) {
      this.feedback = 'Too high! Try again.';
    } else if (this.guess < this.targetNumber) {
      this.feedback = 'Too low! Try again.';
    } else {
      this.feedback = 'Congratulations! You guessed the correct number.';
    }

    this.guess = null;
  }
}
