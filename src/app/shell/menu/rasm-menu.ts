import { Component, ViewChild,OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { StateService } from "@uirouter/angular";
import { ISlimScrollOptions } from 'ng2-slimscroll';


 @Component({
 	selector : 'app-menu',
 	styleUrls : ['./rasm-menu.css'],
 	templateUrl : "./rasm-menu.html", 
 })

export class menu implements OnInit {
    opts: ISlimScrollOptions;

    ngOnInit() {
      this.opts = {
        position: 'right',
        barBackground: '#000000'
      }
    }

    @ViewChild('right') sidenav: MdSidenav;
 
    constructor(private state : StateService){

    }
    navArray =[{
        name : "Home",
        icon : "home",
        state : 'home.dash',
        clickCls : true
        
    },{
        name : "Profile",
        icon : "account_circle",
        state : 'home.profile',
        clickCls : false
    },{
        name : "Email",
        icon : "email",
        clickCls : false
    },{
        name : "Charts",
        icon : "show_chart",
        clickCls : false
    },{
        name : "Chat",
        icon : "chat_bubble",
        clickCls : false
    },{
        name : "Dashboard",
        icon : "dashboard",
        clickCls : false
    },{
        name : "Profile",
        icon : "account_circle",
        clickCls : false
    },{
        name : "Email",
        icon : "email",
        clickCls : false
    },{
        name : "Charts",
        icon : "show_chart",
        clickCls : false
    } ] 

    sideNavToggle() {
        this.sidenav.toggle();
            console.log("Sidenav opened");
    }
    sideNavClose() {
        this.sidenav.close(); 
    }

    changeColor(obj){ 
        for(var i=0; i<=this.navArray.length -1; i++){
            this.navArray[i].clickCls = false
        }
        obj.clickCls = true;

        this.changeState(obj);
    }

    changeState(obj){ 
        this.state.go(obj.state);
    }
 }
