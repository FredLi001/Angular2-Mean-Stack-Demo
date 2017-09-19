export class BookingInfo{
    name:string;
    tel:string;
    date:string;
    time:string;
    partysize:string;
    tablenumber:string;
    confirmationCode:number;
    ownerId?:string;
    bookingInfoId?:string;

    constructor(name:string,tel:string,date:string,time:string,partysize:string,tablenumber:string,
    confirmationCode:number,ownerId?:string,bookingInfoId?:string){
        this.name=name;
        this.tel=tel;
        this.date=date;
        this.time=time;
        this.partysize=partysize;
        this.tablenumber=tablenumber;
        this.confirmationCode=confirmationCode;
        this.ownerId=ownerId;
        this.bookingInfoId=bookingInfoId;
    }
}