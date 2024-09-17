import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  name: string = '';
  greeting: string = '';

  displayGreeting() {
    this.greeting = `Hello, ${this.name}! I hope you are having a great day! Fighting!`;
    console.log("Greeting Displayed")
  }
}
