import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  str: string = '';
  stringLength: number | null = null;

  countLength() {
    this.stringLength = this.str.length;
    console.log("String Lenght Counted")
  }
}
