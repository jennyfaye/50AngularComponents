import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorialResult: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorialResult = this.factorial(this.number);
      console.log('Factorial Calculated.')
    } else {
      this.factorialResult = null
      console.log('Enter a number.')
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
