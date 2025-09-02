import { Component } from '@angular/core';
import { CountryInfoService } from './services/country-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit() {
    // Example usage: Call service method to get country info
    this.countryInfoService.getCountryInfo('US').subscribe(
      (data) => {
        console.log('Country Info:', data);
      },
      (error) => {
        console.error('Error fetching country info:', error);
      }
    );
  }
}



