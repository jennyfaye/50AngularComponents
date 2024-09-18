import { Component } from '@angular/core';

@Component({
  selector: 'app-textformmater',
  templateUrl: './textformmater.component.html',
  styleUrl: './textformmater.component.css'
})
export class TextformmaterComponent {
  text: string = '';
  format: string = 'uppercase';
  formattedText: string | null = null;

  formatText() {
    if (this.format === 'uppercase') {
      this.formattedText = this.text.toUpperCase();
    } else if (this.format === 'lowercase') {
      this.formattedText = this.text.toLowerCase();
    }
  }
}
