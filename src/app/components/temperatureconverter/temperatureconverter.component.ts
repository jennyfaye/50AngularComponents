import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  temperature: number | null = null;
  convertedTemp: number | null = null;
  conversionType: string = 'CtoF';

  convertTemperature() {
    if (this.temperature !== null) {
      if (this.conversionType === 'CtoF') {
        this.convertedTemp = (this.temperature * 9/5) + 32;
        console.log("Converted to Fahrenheit")
      }
      else {
        this.convertedTemp = (this.temperature - 32) * 5/9;
        console.log("Converted to Celsius")
      }
    }
  }
}
