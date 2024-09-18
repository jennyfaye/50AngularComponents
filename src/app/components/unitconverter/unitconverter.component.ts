import { Component } from '@angular/core';

@Component({
  selector: 'app-unitconverter',
  templateUrl: './unitconverter.component.html',
  styleUrl: './unitconverter.component.css'
})
export class UnitconverterComponent {
  value: number | null = null;
  unitType: string = 'm-to-km';
  convertedValue: number | null = null;

  convert() {
    if (this.value !== null) {
      if (this.unitType === 'm-to-km') {
        this.convertedValue = this.value / 1000;
      } else if (this.unitType === 'km-to-m') {
        this.convertedValue = this.value * 1000;
      }
    }
  }
}
