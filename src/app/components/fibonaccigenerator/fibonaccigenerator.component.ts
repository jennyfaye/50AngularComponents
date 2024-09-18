import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  number: number | null = null;
  fibonacciSequence: number[] = [];

  generateFibonacci() {
    if (this.number && this.number > 0) {
      this.fibonacciSequence = this.calculateFibonacci(this.number);
    } else {
      this.fibonacciSequence = [];
      alert('Please enter a positive number.');
    }
  }

  private calculateFibonacci(number: number): number[] {
    const sequence = [0, 1];
    while (sequence.length < number) {
      const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
    return sequence.slice(0, number);
  }
}
