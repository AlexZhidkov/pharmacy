import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-webbit-home',
  templateUrl: './webbit-home.component.html',
  styleUrls: ['./webbit-home.component.css']
})
export class WebbitHomeComponent {
  weatherData: any;
  mySqlData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5109/WeatherForecast').subscribe((response) => {
      this.weatherData = response;
    });
    this.http.get('http://localhost:5109/MySql').subscribe((response) => {
      this.mySqlData = response;
    });
  }
}
