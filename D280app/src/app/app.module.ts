import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppComponent,
    MapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
