import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthdate: number | null = null;
  age: number | null = null;

  displayAge() {
    if (this.birthdate) {
      const today = new Date();
      const birthDate = new Date(this.birthdate);

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.age = age;
      console.log("Age Displayed")
    }
  }
}
