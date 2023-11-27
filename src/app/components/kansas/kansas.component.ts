import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { WeatherServices } from 'src/app/services/weather.service';
import { Weather } from '../../interfaces/weather';
Chart.register(...registerables);

@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html'
})
export class KansasComponent implements OnInit{
  public weatherkansas: Weather[] = [];
  public newweatherkansas: any = [];
  public getTemperatures:number [] = [];
  public getPeriods:number[] = [];
  public iteratorOfProperties:number = 0;
  public kansasChart: Chart;
  
  
  constructor(
    private weatherService: WeatherServices,
  ){}
  
  ngOnInit(): void {  
    this.loadKansasData("TOP");
    this.RenderChart(this.getPeriods, this.getTemperatures); 
  }
  loadKansasData(term: string): void{
    this.weatherService.getWeatherData(term).then(kansasweather => {
      this.weatherkansas = kansasweather;
      this.newweatherkansas = kansasweather;
      this.getGraphicValues( this.newweatherkansas.properties.periods );
    })
  }

  getGraphicValues(dataArray:any []):void{    
     for (
      this.iteratorOfProperties = 1;
      this.iteratorOfProperties < dataArray.length;
      this.iteratorOfProperties ++)
      {
       this.getPeriods.push(dataArray[this.iteratorOfProperties].name);
       this.getTemperatures.push(dataArray[this.iteratorOfProperties].temperature);
      } 
  }

  RenderChart(periods: number[], temparature : number[]){ 
    this.kansasChart = new Chart("kansasLines", {
      type: 'line',
      data: {
        labels: periods,
        datasets: [{
          label: 'Temperature',
          data: temparature,
          borderWidth: 1,
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
} 
