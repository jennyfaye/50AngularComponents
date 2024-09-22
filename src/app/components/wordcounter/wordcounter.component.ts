import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  text: string = '';
  wordCount: number = 0;

  countWords() {
    this.wordCount = this.text.trim().split(/\s+/).filter(word => word.length > 0).length;
    console.log("Words are counted.")
  }
}
