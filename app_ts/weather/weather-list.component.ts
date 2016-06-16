import {Component,OnInit} from "@angular/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from './weather-item';
import {WeatherService} from './weather.service';
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
         <section class="weather-element">Hello Vova!</section>
            <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]  
})
/**
 * list of weatherItems
 */
export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];
    
    constructor(private _weatherService: WeatherService){
        
    }
    
    ngOnInit():any{
     this.weatherItems = this._weatherService.getWeatherItems();  
    }
}