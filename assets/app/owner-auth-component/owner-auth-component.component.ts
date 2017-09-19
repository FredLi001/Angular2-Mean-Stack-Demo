import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookingItemService} from "../bookingItem/bookingItem.service";

@Component({
  selector: 'app-owner-auth-component',
  templateUrl: './owner-auth-component.component.html',
  styleUrls: ['./owner-auth-component.component.css']
})
export class OwnerAuthComponentComponent implements OnInit {

  constructor(private bookingItemService:BookingItemService) { }

  ngOnInit() {

  }
isLogin(){
    return this.bookingItemService.isLogin();
}


}
