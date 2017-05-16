import { Component, ViewChild,OnInit } from '@angular/core';
import { GaugeSegment, GaugeLabel } from 'ng-gauge';
import { ISlimScrollOptions } from 'ng2-slimscroll';

// var Gauge = require('gauge.js');

 @Component({
 	selector : 'app-dash',
 	styleUrls : ['./rasm-dash.css'],
 	templateUrl : "./rasm-dash.html", 
 })

export class dash implements OnInit {  
    opts: ISlimScrollOptions;

    ngOnInit() {
      this.opts = {
        position: 'right',
        barBackground: '#000000'
      }
    }


    options =  {  
       "chart":{  
           "type":'column',
           "backgroundColor": '#100d25',
           'borderRadius': '15'
             
       },
       "title":{  
          "text":'Summary',
          "style": {
              "color": '#00daff',
              'font' : 'bold 20px "Roboto", "Helvetica Neue", "Arial", sans-serif'
          }
       },
        "legend": {
              "itemStyle": {
                 "font": '14px "Roboto", "Helvetica Neue", "Arial", sans-serif',
                 "color": '#ffffff'
              }, 
           
        },
       "xAxis":{  
            "labels": {
             "style": {
              "color": '#00daff',
              'font' : '14px "Roboto", "Helvetica Neue", "Arial", sans-serif'
             }
            },
           "categories":[]
       },
        "yAxis": {
            "labels": {
                "style": {
                    "color": '#00daff',
                    'font' : '14px "Roboto", "Helvetica Neue", "Arial", sans-serif'
                }
            },
            "gridLineColor": '#00daff',
            "title": {
              "style": {
                "color": '#ffffff', 
                "fontSize": '14px',
                "fontFamily": '"Roboto", "Helvetica Neue", "Arial", sans-serif'
              }            
            }
        },
       "series":[  
          {  
             "name":'Ratings',
             "data":[  
                11,
                21,
                33,
                42
             ],
             "color": '#6abdcc'
          },
          {  
             "name":'Views',
             "data":[  
                111,
                112,
                123,
                134
             ],
             "color": '#1690a8'
          }
       ]
    }

colors = {
    indigo: '#14143e',
    pink: '#fd1c49',
    orange: '#ff6e00',
    yellow: '#f0c800',
    mint: '#00efab',
    cyan: '#05d1ff',
    purple: '#841386',
    white: '#fff',
    lightBlue : 'rgb(0, 170, 206)',
    head : '#04001b'
  };
 
  visit = {
    bgRadius: 60,
    bgColor: this.colors.head,
    rounded: false,
    reverse: false,
    animationSecs: 1,
    labels: [      
      new GaugeLabel({
        color: this.colors.lightBlue,
        text: '81%',
        x: 0,
        y: 0,
        fontSize: '2em'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 81,
        color: this.colors.lightBlue,
        borderWidth: 20
      })
    ]
  };
 
  purchase = {
    bgRadius: 60,
    bgColor: this.colors.head,
    rounded: false,
    reverse: false,
    animationSecs: 1,
    labels: [      
      new GaugeLabel({
        color: this.colors.lightBlue,
        text: '77%',
        x: 0,
        y: 0,
        fontSize: '2em'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 77,
        color: this.colors.lightBlue,
        borderWidth: 20
      })
    ]
  };
 
  users = {
    bgRadius: 60,
    bgColor: this.colors.head,
    rounded: false,
    reverse: false,
    animationSecs: 1,
    labels: [      
      new GaugeLabel({
        color: this.colors.lightBlue,
        text: '66%',
        x: 0,
        y: 0,
        fontSize: '2em'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 66,
        color: this.colors.lightBlue,
        borderWidth: 20
      })
    ]
  };
 
  return = {
    bgRadius: 60,
    bgColor: this.colors.head,
    rounded: false,
    reverse: false,
    animationSecs: 1,
    labels: [      
      new GaugeLabel({
        color: this.colors.lightBlue,
        text: '55%',
        x: 0,
        y: 0,
        fontSize: '2em'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 55,
        color: this.colors.lightBlue,
        borderWidth: 20
      })
    ]
  };
}
