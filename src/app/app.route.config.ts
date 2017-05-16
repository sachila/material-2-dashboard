import {UIRouter}  from "@uirouter/angular";
import {Injector, Injectable} from "@angular/core"; 

export function uiRouterConfigFn(router: UIRouter, injector: Injector){
	router.urlService.rules.otherwise({ state: 'loader' });
}