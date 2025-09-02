import { Component } from '@angular/core';
import { WorldbankService } from '../../app/worldbank.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  selectedCountry: any = {};

  constructor(private worldbankService: WorldbankService) { }

  handleMapClick(countryCode: string) {
    this.worldbankService.getCountryInfo(countryCode).subscribe((data: any[]) => {
      if (data.length > 1) {
        const countryData = data[1][0]
        this.selectedCountry = {
          name: countryData.name,
          capital: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          population: countryData.population,
          area: countryData.area,
          //add more properties as needed
        };
      }
    });
  }
}











