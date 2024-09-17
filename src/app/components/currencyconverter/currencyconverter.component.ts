import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  USD: number | null = null;
  PHP: number | null = null;
  conversionRate: number = 56;

  convertCurrency() {
    if (this.USD !== null) {
      this.PHP = this.USD * this.conversionRate;
      console.log("Converted to PHP")
    } else {
      this.PHP = null;
      console.log("Not Converted")
    }
  }
}
