import { Component } from '@angular/core';

@Component({
  selector: 'app-nameinitial',
  templateUrl: './nameinitial.component.html',
  styleUrl: './nameinitial.component.css'
})
export class NameinitialComponent {
  fullName: string = '';
  initials: string | null = null;

  generateInitials() {
    const names = this.fullName.split(' ');
    this.initials = names.map(name => name.charAt(0)).join('');
    console.log("Initials Generated.")
  }
}
