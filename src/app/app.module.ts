import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {UIRouterModule} from "@uirouter/angular";
import { ROUTES } from "@angular/router";
import { GaugeModule  } from 'ng-gauge';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';


import { AppComponent } from './app.component';
import { menu } from './shell/menu/rasm-menu';
import { dash } from './shell/dashboard/rasm-dash';
import {uiRouterConfigFn} from "./app.route.config";
import {home} from "./app.state";

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

let state = [home];

let imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    ChartModule,
    GaugeModule 
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    menu,dash
  ],
  imports: imports,
  providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
