import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatetwodates',
  templateUrl: './calculatetwodates.component.html',
  styleUrl: './calculatetwodates.component.css'
})
export class CalculatetwodatesComponent {
  date1: string = '';
  date2: string = '';
  daysDifference: number | null = null;

  calculateDaysDifference() {
    if (this.date1 && this.date2) {
      const start = new Date(this.date1);
      const end = new Date(this.date2);
      const timeDifference = Math.abs(end.getTime() - start.getTime());
      this.daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    } else {
      this.daysDifference = null;
    }
  }
}
