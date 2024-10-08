import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  word: string = '';
  palindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.word.toLowerCase().replace(/[\W_]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    this.palindrome = cleanedWord === reversedWord;
  }
}
