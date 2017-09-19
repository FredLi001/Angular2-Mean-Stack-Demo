import { Component } from '@angular/core';
import {BookingItemService} from "./bookingItem/bookingItem.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[BookingItemService]
})
export class AppComponent {
    
}