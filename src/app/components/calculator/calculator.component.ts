import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  addition(){
  console.log("Added")
  this.result = this.number1 + this.number2;
}

  subtraction(){
    console.log("Subtracted")
    this.result = this.number1 - this.number2;
  }

  multiplication(){
    console.log("Multiplied")
    this.result = this.number1 * this.number2;
  }

  division(){
    console.log("Divided")
    this.result = this.number1 / this.number2;
  }
}
