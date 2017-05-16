import { Component, ViewChild } from '@angular/core'; 
import { StateService } from "@uirouter/angular";

// var Gauge = require('gauge.js');

 @Component({
 	selector : 'app-profile',
 	styleUrls : ['./rasm-profile.css'],
 	templateUrl : "./rasm-profile.html", 
 })

export class profile{ 
  Company : string = "Duo software";
  Username : string = "Sachila";
  city : string = "Colombo";
  Country : string = "Sri Lanka";
  firstname : string = "Sachila";
  lastName : string = "Ranawaka";
  address : string = "Kanthi, wewala, Horana";
  postalCode : string = "124000";
  notes : string = "notes";


  constructor(private state : StateService){

  }

  submit(){ 
     this.state.go( this.state.current, {}, {reload: true}); //second parameter is for $stateParams 
  }
}
 