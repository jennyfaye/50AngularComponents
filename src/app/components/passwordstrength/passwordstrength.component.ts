import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordstrength',
  templateUrl: './passwordstrength.component.html',
  styleUrl: './passwordstrength.component.css'
})
export class PasswordstrengthComponent {
  password: string = '';
  strength: string = '';

  evaluatePasswordStrength() {
    const lengthCriteria = this.password.length >= 8;
    const complexityCriteria = /[A-Z]/.test(this.password) &&
                                /[a-z]/.test(this.password) &&
                                /[0-9]/.test(this.password) &&
                                /[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/.test(this.password);

    if (this.password.length === 0) {
      this.strength = '';
    } else if (lengthCriteria && complexityCriteria) {
      this.strength = 'Strong';
    } else if (lengthCriteria || complexityCriteria) {
      this.strength = 'Moderate';
    } else {
      this.strength = 'Weak';
    }
  }
}
