import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultMessage: string | null = null;

  checkDivisibility() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 === 0) {
        this.resultMessage = 'Cannot divide by zero.';
      } else if (this.num1 % this.num2 === 0) {
        this.resultMessage = `${this.num1} is divisible by ${this.num2}.`;
      } else {
        this.resultMessage = `${this.num1} is not divisible by ${this.num2}.`;
      }
    } else {
      this.resultMessage = 'Please enter both numbers.';
    }
  }
}
