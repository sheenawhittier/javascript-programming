import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: []

})
export class MapComponent {
  @Output() countrySelected = new EventEmitter<string>();

  selectCountry(code: string) {
    this.countrySelected.emit(code);
  }

  onMapClick(event: MouseEvent): void {
    const element = event.target as SVGElement;
    if (element.tagName === 'path' && element.id) {
      this.countrySelected.emit(element.id);
    }

    }
  }















