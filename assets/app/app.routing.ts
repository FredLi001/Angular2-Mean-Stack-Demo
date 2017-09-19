import {RouterModule, Routes} from "@angular/router";
import {UserAuthComponent} from "./user-auth/user-auth.component";
import {OwnerAuthComponentComponent} from "./owner-auth-component/owner-auth-component.component";

import {AUTH_ROUTES} from "./user-auth/user-auth.routing";
import {IndexComponent} from "./index.component/index.component";
import {OWNER_AUTH_ROUTES} from "./owner-auth-component/owner-auth.routing";

const APP_ROUTES:Routes=[
  {path:'', component:IndexComponent,pathMatch:'full'},
  {path:'user', component:UserAuthComponent,children:AUTH_ROUTES},
  {path:'owner', component:OwnerAuthComponentComponent, children:OWNER_AUTH_ROUTES}
];
export const routing = RouterModule.forRoot(APP_ROUTES);//register our router to angular 2 router module
