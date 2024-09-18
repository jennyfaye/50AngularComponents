import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  frequency: number = 0;
  compoundInterest: number = 0;

  calculateCompoundInteres() {
    if (this.principal && this.rate && this.time && this.frequency) {
      const principal = this.principal;
      const rate = this.rate / 100;
      const time = this.time;
      const frequency = this.frequency;

      this.compoundInterest = principal * Math.pow(1 + (rate / frequency), frequency * time) - principal;
    } else {
      this.compoundInterest = 0;
      console.log("Enter principal, rate, time, and frequency.");
    }
  }
}
