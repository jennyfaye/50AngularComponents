import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  word: string = '';
  shuffledWord: string = '';

  shuffleWord() {
    if (this.word.trim()) {
      this.shuffledWord = this.word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
    }
  }
}
