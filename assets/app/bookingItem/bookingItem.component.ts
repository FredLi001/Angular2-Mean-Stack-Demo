import {Component, OnInit} from "@angular/core";
import {BookingInfo} from "./bookingItem.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    selector:'booking-item',
    templateUrl:'./bookingItem.component.html',
    styleUrls:['./bookingItem.component.css']
})
export class BookingComponent implements OnInit{
    bItem:BookingInfo;
    myForm:FormGroup;

    ngOnInit(){
        this.bItem=new BookingInfo('zhang','1234','2017-1-1','12:12','3','1',123);


            //to create form object by ourself
            this.myForm = new FormGroup({
                name:new FormControl(null,Validators.required),
                tel:new FormControl(null,Validators.required),
                date:new FormControl(null,Validators.required),
                time:new FormControl(null,Validators.required),
                partysize:new FormControl(null,Validators.required),
                tablenumber:new FormControl(null,Validators.required),
                date1:new FormControl(null,Validators.required),
                time1:new FormControl(null,Validators.required),
                partysize1:new FormControl(null,Validators.required),
                tablenumber1:new FormControl(null,Validators.required)
            });


        }

    onUpdate(){
        console.log(this.myForm);
    }

    onDelete(){

    }
}