import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "You are not the opinion of somebody who doesn't know you. - Taylor Swift",
    "You always have to be 150% or more prepared so that even if you do make a mistake you will still be at 100%. - Hoshi",
    "You don't have to be good at your hobby. - Lee Know",
    "You try it and judge for yourself. Don't let other people decide for you. - Changbin",
    "People are going to judge you anyway, so you might as well do what you want. - Taylor Swift",
    "You are supposed to wait endlessly for people you like. - Jeonghan",
    "Don't care too much about others, love and trust yourself more. - Wonwoo",
    "Being fearless isn't being 100 percent not fearful; it's being terrified but you jump anyway. - Taylor Swift",
    "It's okay to cry. Crying doesn't mean you're weak. It's natural and helps you heal. - Hyunjin",
    "You don't have to be good at your hobby. - Lee Know"
  ];
    currentQuote: string | null = null;

    displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes[randomIndex];
      console.log("Displayed")
    }
}
