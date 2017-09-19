import {Component, OnInit} from "@angular/core";
import {BookingInfo} from "../../bookingItem/bookingItem.model";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {status} from "./status.model";

@Component({
    selector:'view-seating',
    templateUrl:'./view-seating.component.html'
})
export class ViewSeatingComponent implements OnInit{
    private bItems:BookingInfo[]=[];
    private index:number;
    private table:number[]=[1,2,3,4,5,6,7,8,9,10];
    private table2:number[]=[11,12,13,14,15,16,17,18,19,20];
    private tb:number;

    private table1:BookingInfo[]=[];
    private status:string[]=[];

    private statusModels:status[]=[];


    private name1:string;
    private tel1:string;
    private time1:string;

    private date1:string;
    private tablenumber1:string;
    private partysize1:string;
    private confirmationcode1:number;




    constructor(private bookingItemService:BookingItemService) { }

    ngOnInit() {

//初始化时从数据库取出数据
        this.bookingItemService.getBookingItem()
            .subscribe((bItems:BookingInfo[])=>{
                this.bItems=bItems;
                console.log(this.bItems);
                console.log(this.bItems[0]);
            });

            /*or(let i =0;i<this.bItems.length;i++){
               if(this.bItems[i].tablenumber == 2){
                    this.table1.push(this.bItems[i]);
               }
           }*/
    }
    //tables
    onClick(j:number) {
        this.tb=j;
        this.table1 = [];
        this.statusModels=[];
        this.status=[];
        for (let i = 0; i < this.bItems.length; i++) {
            if (this.bItems[i].tablenumber == (j)) {
                this.table1.push(this.bItems[i]);
            }
        }
        for(let i=0;i<this.table1.length;i++){
            if(new Date('2017-8-22')>new Date(this.table1[i].date)){
                this.status[i]='done';
            }else{
                this.status[i]='waiting';
            }
        }
        for(let i = 0; i < this.table1.length; i++){
            this.statusModels[i]=new status(this.table1[i].name,this.table1[i].tel,this.table1[i].date,
                this.table1[i].time,this.table1[i].partysize,this.table1[i].tablenumber,this.table1[i].confirmationCode,
            this.status[i]);
        }

    }
    onDetail(i:number){

    this.name1=this.table1[i].name;
    this.tel1=this.table1[i].tel;
    this.date1=this.table1[i].date;
    this.time1=this.table1[i].time;
    this.tablenumber1=this.table1[i].tablenumber;
    this.partysize1=this.table1[i].partysize;
    this.confirmationcode1=this.table1[i].confirmationCode;
}
}