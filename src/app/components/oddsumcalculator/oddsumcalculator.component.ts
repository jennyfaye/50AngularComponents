import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number = 0;
  sum: number = 0;

  calculateOddNumberSum() {
    if (this.number !== 0 && this.number > 0) {
      this.sum = this.calculateSumOfOddNumbers(this.number);
      console.log("Odd number calculated.");
    } else {
      this.sum = 0;
      console.log("Enter a positive number.");
    }
  }

  private calculateSumOfOddNumbers(num: number): number {
    let total = 0;
    for (let i = 1; i <= num; i += 2) {
      total += i;
    }
    return total;
  }
}
