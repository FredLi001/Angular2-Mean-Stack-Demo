

import {Component, OnInit} from "@angular/core";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {Route, Router} from "@angular/router";
@Component({
    selector:'create-edit-booking',
    templateUrl:'./create-edit-booking.component.html'
})
export class CreateEditBookingComponent implements OnInit{
    constructor(private bookingItemService:BookingItemService,private router:Router) { }
    ngOnInit() {
        this.router.navigateByUrl('/user');
    }
}