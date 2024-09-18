import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number = 0;
  selectedCurrency: string = 'USD';
  formattedAmount: string | null = null;
  euroConversionRate: number = 0.90;
  phpConversionRate: number = 56;

  formatCurrency() {
    if (this.selectedCurrency === 'USD') {
      this.formattedAmount = '$' + this.amount.toFixed(2);
    } else if (this.selectedCurrency === 'PHP') {
      const phpAmount = this.amount * this.phpConversionRate;
      this.formattedAmount = '₱' + phpAmount.toFixed(2);
    } else if (this.selectedCurrency === 'EUR') {
      const eurAmount = this.amount * this.euroConversionRate;
      this.formattedAmount = '€' + eurAmount.toFixed(2);
    }
  }
}
