import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'YOUR_API_URL_HERE';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/countryInfo?name=${countryName}`);
  }
}
