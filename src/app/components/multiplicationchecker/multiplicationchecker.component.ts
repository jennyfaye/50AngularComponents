import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  resultMessage: string = '';

  checkIfMultiple() {
    if (this.number2 === 0) {
      this.resultMessage = 'The second number cannot be zero.';
    } else if (this.number1 === null || this.number2 === null) {
      this.resultMessage = 'Please enter both numbers.';
    } else if (this.number1 % this.number2 === 0) {
      this.resultMessage = `${this.number1} is a multiple of ${this.number2}.`;
    } else {
      this.resultMessage = `${this.number1} is not a multiple of ${this.number2}.`;
    }
    }
}
