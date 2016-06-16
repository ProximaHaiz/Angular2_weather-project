'use strict';
import {Component} from '@angular/core';
import {WeatherListComponent} from './weather/weather-list.component';
import{WeatherSearchComponent} from './weather/weather-search.component'
import{SidebarComponent} from './sidebar.component'
import {TranslatorComponent} from './translator/translator-search.component'
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Routes} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Angular 2 Weather</h1>
        </header>
        <my-sidebar></my-sidebar>
      <my-translator></my-translator>
        <my-weather-search></my-weather-search>
        <weather-list></weather-list>
    `,
    directives: [WeatherListComponent,WeatherSearchComponent,TranslatorComponent,SidebarComponent]
})
export class AppComponent {
}
//   <my-translator></my-translator>
