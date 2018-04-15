import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { CurrentLocation } from '../models/CurrentLocation';
import { Weather } from '../models/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentLocation: CurrentLocation;
  weather: Weather = new Weather("", "", "");

  constructor(private weatherService: ManageService) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation(){
    if (window.navigator && window.navigator.geolocation){
window.navigator.geolocation.getCurrentPosition(
  position => {
    this.currentLocation = new CurrentLocation(position.coords.latitude, position.coords.longitude);
    console.log(this.currentLocation);
    this.weatherService.getWeather(this.currentLocation.lat, this.currentLocation.lng).subscribe(
      res => {
        console.log(res);
        let data = res.json();
        console.log(data.main);
        this.weather = new Weather(data.main.temp, data.main.pressure, data.main.humidity)
      }
    )
  }
  
)

    }
    
  }
}
