export class Owner{
    email:string;
    password:string;
    ownerId?:string;
    restName?:string;
    restEmail?:string;
    restContact?:string;
    restAddress?:string;
    constructor(email:string,
                password:string,
                ownerId:string,
                restName?:string,
                restEmail?:string,
                restContact?:string,
                restAddress?:string){
        this.email=email;
        this.password=password;
        this.restName=restName;
        this.restEmail=restEmail;
        this.restContact=restContact;
        this.restAddress=restAddress;
        this.ownerId=ownerId;
    }
}

/*
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
}*/