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
import { SlimScrollModule } from 'ng2-slimscroll';


import { AppComponent } from './app.component';
import { loader } from './shell/loader/rasm-loader';
import { menu } from './shell/menu/rasm-menu';
import { dash } from './shell/dashboard/rasm-dash';
import { profile } from './shell/profile/rasm-profile';
import {uiRouterConfigFn} from "./app.route.config";
import {dashState,profileState,loaderState,menuState} from "./app.state";

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

let state = [dashState,profileState,loaderState,menuState];

let imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ChartModule,
    GaugeModule,
    UIRouterModule.forRoot({
      'states': state,
      'useHash': true,
      'config': uiRouterConfigFn
    }),
    SlimScrollModule
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    menu,
    dash,
    profile,
    loader
  ],
  imports: imports,
  providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
