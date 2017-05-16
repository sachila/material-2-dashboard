import { Component, ViewChild, OnInit } from '@angular/core'; 
import { StateService } from "@uirouter/angular";

// var Gauge = require('gauge.js');

 @Component({
 	selector : 'app-loader',
 	styleUrls : ['./rasm-loader.css'],
 	templateUrl : "./rasm-loader.html", 
 })

export class loader{ 
  hideLoader : boolean = true;

  constructor(private state : StateService){    	
  	var vm = this;
	setTimeout(function(){
  		vm.hideLoader = false;
  		state.go('home.dash');
  	},5000);

  }
}
