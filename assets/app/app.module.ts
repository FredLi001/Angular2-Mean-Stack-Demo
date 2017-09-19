import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./header-component/header.component";
import {OwnerAuthComponentComponent} from "./owner-auth-component/owner-auth-component.component";
import {UserBookTableComponent} from "./user-auth/user-book-table/user-book-table.component";
import {UserAuthComponent} from "./user-auth/user-auth.component";
import {UserEditTableComponent} from "./user-auth/user-edit-table/user-edit-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {IndexComponent} from "./index.component/index.component";
import {routing} from "./app.routing";
import {BookingComponent} from "./bookingItem/bookingItem.component";
import {BookingItemService} from "./bookingItem/bookingItem.service";
import {CreateEditBookingComponent} from "./owner-auth-component/create-edit-booking.component/create-edit-booking.component";
import {LoginComponent} from "./owner-auth-component/login.component/login.component";
import {ProfileSettingsComponent} from "./owner-auth-component/profile-settings.component/profile-settings.component";
import {ViewBookingComponent} from "./owner-auth-component/view-booking.component/view-booking.componenet";
import {ViewContactComponent} from "./owner-auth-component/view-contact.component/view-contact.component";
import {ViewSeatingComponent} from "./owner-auth-component/view-seating.component/view-seating.component";
import {NgPipesModule} from "ngx-pipes";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OwnerAuthComponentComponent,
        UserBookTableComponent,
        UserAuthComponent,
        UserEditTableComponent,
        IndexComponent,
        BookingComponent,
        CreateEditBookingComponent,
        LoginComponent,
        ProfileSettingsComponent,
        ViewBookingComponent,
        ViewContactComponent,
        ViewSeatingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        routing,
        NgPipesModule
    ],
    providers:[BookingItemService],
    bootstrap: [AppComponent]
})
export class AppModule {

}