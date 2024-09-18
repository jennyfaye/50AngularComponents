import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number | null = null;
  multiplicationTable: string[] = [];

  generateTable() {
    if (this.number !== null) {
      this.multiplicationTable = [];
      console.log("Generated")
      for (let i = 1; i <= 10; i++) {
        this.multiplicationTable.push(`${this.number} x ${i} = ${this.number * i}`);
      }
    } else {
      this.multiplicationTable = [];
      console.log("Enter Number First")
    }
  }
}
