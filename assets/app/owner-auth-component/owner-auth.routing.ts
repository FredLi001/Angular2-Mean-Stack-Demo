
import {Routes} from "@angular/router";
import {CreateEditBookingComponent} from "./create-edit-booking.component/create-edit-booking.component";
import {LoginComponent} from "./login.component/login.component";
import {ProfileSettingsComponent} from "./profile-settings.component/profile-settings.component";
import {ViewBookingComponent} from "./view-booking.component/view-booking.componenet";
import {ViewContactComponent} from "./view-contact.component/view-contact.component";

import {ViewSeatingComponent} from "./view-seating.component/view-seating.component";



export const OWNER_AUTH_ROUTES: Routes =[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'create-edit-booking', component:CreateEditBookingComponent},
    {path:'login', component:LoginComponent},
    {path:'profile-settings', component:ProfileSettingsComponent},
    {path:'view-booking', component:ViewBookingComponent},
    {path:'view-contact', component:ViewContactComponent},
    {path:'view-seating', component:ViewSeatingComponent}
];
