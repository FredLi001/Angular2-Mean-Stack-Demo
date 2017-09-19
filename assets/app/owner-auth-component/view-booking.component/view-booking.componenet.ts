import {Component, OnInit} from "@angular/core";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {BookingInfo} from "../../bookingItem/bookingItem.model";
@Component({
    selector:'view-booking',
    templateUrl:'./view-booking.component.html'
})
export class ViewBookingComponent implements OnInit{
    private bItems:BookingInfo[]=[];
    private index:number;
    private theButtonItem:BookingInfo;
    private name:string;
    private tel:string;
    private time:string;

    private date:string;
    private tablenumber:string;
    private partysize:string;
    private confirmationcode:number;


    constructor(private bookingItemService:BookingItemService) { }

    ngOnInit() {

//初始化时从数据库取出数据
        this.bookingItemService.getBookingItem()
            .subscribe((bItems:BookingInfo[])=>{
                this.bItems=bItems;
                console.log(this.bItems);
            });


    }
    onDetail(i:number){

        this.name=this.bItems[i].name;
        this.tel=this.bItems[i].tel;
        this.date=this.bItems[i].date;
        this.time=this.bItems[i].time;
        this.tablenumber=this.bItems[i].tablenumber;
        this.partysize=this.bItems[i].partysize;
        this.confirmationcode=this.bItems[i].confirmationCode;
    }
}