
import { AppComponent } from './app.component';
import { loader } from './shell/loader/rasm-loader';
import { dash } from './shell/dashboard/rasm-dash';
import { menu } from './shell/menu/rasm-menu';
import { profile } from './shell/profile/rasm-profile';


export const loaderState = {name : 'loader', url : 'loader', component : loader}
export const menuState = {name : 'home', url : 'home', component : menu}
export const dashState = {name : 'home.dash',url:'/dash',component : dash}
export const profileState = {name : 'home.profile', url : '/profile', component : profile}
