import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provide this service globally in AppModule
})
export class CountryInfoService {
  constructor(private httpClient: HttpClient) {} // Inject HttpClient in the constructor

  getCountryInfo(countryCode: string): Observable<any> {
    // Use httpClient to make HTTP requests
    return this.httpClient.get<any>(`/api/countries/${countryCode}`);
  }
}



