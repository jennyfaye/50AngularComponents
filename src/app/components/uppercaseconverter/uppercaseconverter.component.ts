import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  str: string = '';
  uppercasedString: string = '';

  convertToUppercase() {
    this.uppercasedString = this.str.toUpperCase();
  }
}
