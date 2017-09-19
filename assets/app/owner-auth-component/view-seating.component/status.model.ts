export class status{
    name:string;
    tel:string;
    date:string;
    time:string;
    partysize:string;
    tablenumber:string;
    confirmationCode:number;
    status:string;

    constructor(name:string,tel:string,date:string,time:string,partysize:string,tablenumber:string,
                confirmationCode:number,status:string){
        this.name=name;
        this.tel=tel;
        this.date=date;
        this.time=time;
        this.partysize=partysize;
        this.tablenumber=tablenumber;
        this.confirmationCode=confirmationCode;
        this.status=status;

    }
}