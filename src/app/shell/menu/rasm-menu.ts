import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

 @Component({
 	selector : 'app-menu',
 	styleUrls : ['./rasm-menu.css'],
 	templateUrl : "./rasm-menu.html", 
 })

export class menu {
    @ViewChild('right') sidenav: MdSidenav;
 

    navArray =[{
        name : "Home",
        icon : "home"
    },{
        name : "Profile",
        icon : "account_circle"
    },{
        name : "Email",
        icon : "email"
    },{
        name : "Charts",
        icon : "show_chart"
    },{
        name : "Chat",
        icon : "chat_bubble"
    },{
        name : "Dashboard",
        icon : "dashboard"
    },{
        name : "Profile",
        icon : "account_circle"
    },{
        name : "Email",
        icon : "email"
    },{
        name : "Charts",
        icon : "show_chart"
    } ] 

    sideNavToggle() {
        this.sidenav.toggle();
            console.log("Sidenav opened");
    }
    sideNavClose() {
        this.sidenav.close(); 
    }
 }
