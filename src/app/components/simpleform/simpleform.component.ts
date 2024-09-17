import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  fname: string = '';
  lname: string = '';
  email: string = '';

  displayedName: string = '';
  displayedEmail: string = '';
  displayData() {
    this.displayedName = this.fname + this.lname;
    this.displayedEmail = this.email;
    console.log("Submitted!")
  }
}
