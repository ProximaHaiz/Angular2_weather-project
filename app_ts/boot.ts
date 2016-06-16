'use strict';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import{WeatherService} from './weather/weather.service'
import {provide} from '@angular/core';
import{TranslatorService} from './translator/translator.service'
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

/**
 * All classes will use the same instances of following providers elements
 */
bootstrap(AppComponent, [HTTP_PROVIDERS,WeatherService,TranslatorService,
  provide(APP_BASE_HREF, {useValue: '/#'}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})]).catch(err => console.error(err));;
