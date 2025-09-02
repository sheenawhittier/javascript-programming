import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { CountryInfoService } from './services/country-info.service'; // Import your service

@NgModule({
  declarations: [
  
    // Other components, directives, pipes
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [
    CountryInfoService // Provide your service here if needed
  ],
  bootstrap: []
})
export class AppModule { }











