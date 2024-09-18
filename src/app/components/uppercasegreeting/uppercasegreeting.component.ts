import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = '';
  uppercaseName: string = '';

  convertToUppercase() {
    if (this.name) {
      this.uppercaseName = this.name.toUpperCase();
      console.log("Name converted to uppercase.");
    } else {
      this.uppercaseName = '';
      console.log("Please enter a name.");
    }
  }
}
