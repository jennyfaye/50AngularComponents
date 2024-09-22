import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  minRange: number = 0;
  maxRange: number = 100;
  randomNumber: number | null = null;

  generateRandomNumber() {
    if (this.minRange >= this.maxRange) {
      this.randomNumber = null;
      console.log('The minimum range must be less than the maximum range.');
      return;
    }

    this.randomNumber = Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
  }
}
