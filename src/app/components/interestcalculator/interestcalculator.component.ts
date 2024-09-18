import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  interest: number = 0;

  calculateSimpleInterest() {
    if (this.principal && this.rate && this.time) {
      this.interest = (this.principal * this.rate * this.time) / 100;
      console.log("Calculated");
    } else {
      this.interest = 0;
      console.log("Enter principal, rate, and time.");
    }
  }
}
