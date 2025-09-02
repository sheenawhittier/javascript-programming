import { Component } from '@angular/core';
import { WorldbankService } from './worldbank.service'; 
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MapComponent]
  
})
export class AppComponent {
  currentCountryData: any = {};  

  constructor(private worldbankService: WorldbankService) {}

  loadCountryInfo(countryCode: string): void {
    this.worldbankService.getCountryInfo(countryCode).subscribe(data => {
      if (data[1].length) {
        this.currentCountryData = {
          name: data[1][0].name,
          capital: data[1][0].capitalCity,
          region: data[1][0].region.value,
          incomeLevel: data[1][0].incomeLevel.value,
          longitude: data[1][0].longitude,
          latitude: data[1][0].latitude
        };
      }
    });
  }
}

