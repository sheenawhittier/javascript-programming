import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {
  private apiUrl = 'https://api.worldbank.org/v2';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/country/${countryCode}?format=json`;
    return this.http.get(url);
  }
}

