import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { WeatherServices } from 'src/app/services/weather.service';
import { Weather } from '../../interfaces/weather';

Chart.register(...registerables);
@Component({
  selector: 'app-columbia',
  templateUrl: './columbia.component.html'
})
export class ColumbiaComponent implements OnInit {
  public weathercolumbia: Weather[] = [];
  public newweathercolumbia: any = [];
  public getTemperaturesColumbia:number [] = [];
  public getPeriodsColumbia:number[] = [];
  public iteratorOfProperties:number = 0;
  public columbiaChart: Chart;

  constructor(
    private weatherService: WeatherServices
  ){}

  ngOnInit(): void { 
    this.loadColumbiaData("LWX");   
    this.RenderChart(this.getPeriodsColumbia, this.getTemperaturesColumbia);     
  }
  
  loadColumbiaData(term: string): void{
    this.weatherService.getWeatherData(term).then(weathercolumbia => {
      this.weathercolumbia = weathercolumbia;
      this.newweathercolumbia = weathercolumbia;
      this.getGraphicValues( this.newweathercolumbia.properties.periods );
    })
  }

  getGraphicValues(dataArray:any []):void{    
     for (
      this.iteratorOfProperties = 1;
      this.iteratorOfProperties < dataArray.length;
      this.iteratorOfProperties ++)
      {
       this.getPeriodsColumbia.push(dataArray[this.iteratorOfProperties].name);
       this.getTemperaturesColumbia.push(dataArray[this.iteratorOfProperties].temperature);
      } 
  }

  RenderChart(periods: number[], temparature : number[]){
    this.columbiaChart = new Chart("columbialine", {
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
