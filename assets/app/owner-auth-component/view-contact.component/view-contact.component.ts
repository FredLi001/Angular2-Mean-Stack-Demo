import {Component, OnInit} from "@angular/core";
import {BookingInfo} from "../../bookingItem/bookingItem.model";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {ContactInfo} from "./contactInfo.model";
import * as _ from 'underscore';
import Collections = require('typescript-collections');
import Set from "typescript-collections/dist/lib/Set";


@Component({
    selector:'view-contact',
    templateUrl:'./view-contact.component.html'
})
export class ViewContactComponent implements OnInit{
    private bItems:BookingInfo[]=[];
    private contactList:ContactInfo[]=[];
    uniq:ContactInfo[]=[];
    res:Array[];
    his:BookingInfo[]=[];
    names:string[]=[];
    uniqNames:string[]=[];
contacts:string[]=[];
    userName:string;


    constructor(private bookingItemService:BookingItemService) { }

    ngOnInit() {

//初始化时从数据库取出数据
        this.bookingItemService.getBookingItem()
            .subscribe((bItems:BookingInfo[])=>{
                this.bItems=bItems;
                console.log(this.bItems);
                for(let i=0; i<this.bItems.length;i++){
                    this.names.push(this.bItems[i].name);
                }
                this.uniqNames=_.uniq(this.names, false);
                console.log(this.uniqNames);

            });
    }
    onDetail(name:string){
        this.his=[];
        for(let i=0; i<this.bItems.length;i++){
            if(this.bItems[i].name === name){
                this.his.push(this.bItems[i]);
            }
        }

    }
    onContact(name:string){

        this.contacts=[];
        for(let i=0; i<this.bItems.length;i++){
            if(this.bItems[i].name === name){
                this.contacts.push(this.bItems[i].tel);
                this.contacts=_.uniq(this.contacts, false);
            }
        }
        console.log(this.contacts);
        this.userName=name;

}


}