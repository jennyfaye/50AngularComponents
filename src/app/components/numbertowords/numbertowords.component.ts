import { Component } from '@angular/core';

@Component({
  selector: 'app-numbertowords',
  templateUrl: './numbertowords.component.html',
  styleUrl: './numbertowords.component.css'
})
export class NumbertowordsComponent {
  number: number | null = null;
  words: string = '';

  convertNumberToWords(num: number): string {
    if (num === 0) return 'Zero';

    const units: string[] = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens: string[] = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens: string[] = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands: string[] = ['', 'Thousand'];

    let words = '';

    const convert = (n: number): string => {
      if (n < 10) return units[n];
      if (n < 20) return teens[n - 11];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? '-' + units[n % 10] : '');
      if (n < 1000) return units[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convert(n % 100) : '');

      return '';
    };

    let thousandIndex = 0;

    while (num > 0) {
      let part = num % 1000;
      if (part) {
        words = convert(part) + (thousands[thousandIndex] ? ' ' + thousands[thousandIndex] : '') + (words ? ' ' + words : '');
      }
      num = Math.floor(num / 1000);
      thousandIndex++;
    }

    return words.trim();
  }

  displayNumberInWords() {
    if (this.number !== null) {
      this.words = this.convertNumberToWords(this.number);
    }
  }
}
