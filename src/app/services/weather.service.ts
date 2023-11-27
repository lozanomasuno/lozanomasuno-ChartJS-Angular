import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../interfaces/weather';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherServices {
  private apiurl: string = 'https://api.weather.gov/gridpoints/'
  constructor(private http: HttpClient) { }

    getWeatherData( term:string ): Promise<Weather[]> {
        const url = `${ this.apiurl }/${ term }/31,80/forecast/`;
        return new Promise<Weather[]>(resolve => {
            axios.get<Weather[]>(url).then(properties =>{
                resolve(properties.data);
            })
        })             
    }
}
