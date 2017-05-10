import {UIRouter} from "ui-router-ng2"; 
import {Injector, Injectable} from "@angular/core"; 

export function uiRouterConfigFn(router: UIRouter, injector: Injector){
	router.urlService.rules.otherwise({ state: 'home' });
}