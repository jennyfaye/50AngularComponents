import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
      console.log("BMI calculated!");
    } else {
      this.bmi = null;
      console.log("Enter both height and weight.");
    }
  }
}
