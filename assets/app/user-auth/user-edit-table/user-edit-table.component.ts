import {Component, NgZone, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {BookingInfo} from "../../bookingItem/bookingItem.model";

@Component({
  selector: 'app-user-edit-table',
  templateUrl: './user-edit-table.component.html',
  styleUrls: ['./user-edit-table.component.css']
})
export class UserEditTableComponent implements OnInit {
  myForm:FormGroup;
  private bItems:BookingInfo[]=[];
  private showF:boolean;
  private onFlyItem:BookingInfo;
  private index:number;
  private canUpdate:boolean;
  private plus:boolean;

  private canDelete:boolean;
  private deleteSign:boolean;



  onSubmit1(form:NgForm){
    this.showF=false;
    this.deleteSign=false;
    for(let i =0; i<this.bItems.length;i++ ){
      if(this.bItems[i].confirmationCode===form.value.confirmationcode1){
        this.showF=true;
        this.onFlyItem=this.bItems[i];
        this.index=i;
        this.plus=false;
      }
     /* console.log("con:"+form.value.confirmationcode1);*/
    }


    console.log('showF: '+this.showF);
    console.log('items:'+this.bItems);
    /*this.myForm.reset();*/
    form.resetForm();

  }
  onSubmit2(form:NgForm){
    console.log(form);
  }

  constructor(private bookingItemService:BookingItemService,private zone: NgZone) { }


  onUpdate(form:NgForm){
    console.log("Updated form： "+form);
      this.plus=true;
      this.canUpdate = true;
     /* if((form.value.newDate && (new Date(this.onFlyItem.date).getTime() !== new Date(form.value.newDate).getTime()))
          || (form.value.newTime&&(this.onFlyItem.time.split(':')[0]!==form.value.newTime.split(':')[0])&&
          (this.onFlyItem.time.split(':')[1]!==form.value.newTime.split(':')[1]))){
          /!*this.onFlyItem.date = form.value.newDate;*!/

        //提交之前做判断
        for(let i =0; i<this.bItems.length;i++ ){
          if(new Date(this.bItems[i].date).getTime() === new Date(form.value.newDate).getTime()){
            if( this.bItems[i].tablenumber === this.onFlyItem.tablenumber){
              if(Math.abs((this.bItems[i].time.split(':')[0]-form.value.time.split(':')[0])*60
                      -(this.bItems[i].time.split(':')[1]-form.value.time.split(':')[1]))<120){
                this.canUpdate=false;

                /!*this.sameUser=false;*!/
              }
            }

          }
        }
      }*/


    for(let i =0; i<this.bItems.length;i++ ){
      if(i = this.index){
        continue;
      }
      if(new Date(this.bItems[i].date).getTime() === new Date(form.value.newDate).getTime()){
        if( this.bItems[i].tablenumber === this.onFlyItem.tablenumber){
          if(Math.abs((this.bItems[i].time.split(':')[0]-form.value.time.split(':')[0])*60
                  -(this.bItems[i].time.split(':')[1]-form.value.time.split(':')[1]))<120){
            this.canUpdate=false;

            /*this.sameUser=false;*/
          }
        }

      }
    }






     /* if((form.value.newTime !== null) && (this.onFlyItem.time !== form.value.newTime)){
          this.onFlyItem.time=form.value.newTime;
      }
     if(this.onFlyItem.partysize !== form.value.newPartysize){
       this.onFlyItem.partysize=form.value.newPartysize;
     }
     for(let i=0;i<this.bItems.length;i++){
       if(i === this.index){
         continue;
       }
       if(this.bItems[i].date===this.onFlyItem.date &&
           (Math.abs((this.bItems[i].time.split(':')[0]-this.myForm.value.time.split(':')[0])*60
               -(this.bItems[i].time.split(':')[1]-this.onFlyItem.time.split(':')[1]))<=120)){
         this.canUpdate = false;
       }
     }*/


     if(this.canUpdate){
       this.onFlyItem.date=form.value.newDate;
       this.onFlyItem.time=form.value.newTime;
       this.onFlyItem.partysize = form.value.newPartysize;
       //执行update方法。得到服务器端返回值后，在改变或者不改变canUpdate的值。
        this.bookingItemService.updateBookingItem(this.onFlyItem)
            .subscribe(
                result=>{
                  console.log("update: "+result);
                  if(!result){
                    this.canUpdate=false;
                  }
                },
                err=>console.log(err)
            );
     }
     form.resetForm();
   }
  onDelete(form:NgForm){
    this.deleteSign=true;
    this.canDelete=true;
    this.bookingItemService.deleteBookingItem(this.onFlyItem)
        .subscribe(
            result=>{
              console.log("delete: "+result);
              if(!result){
                this.canDelete=false;
              }
            }
        );
    form.resetForm();
  }
  ngOnInit() {
    /*this.myForm = new FormGroup({
      confirmationcode:new FormControl(null,Validators.required)

    });*/
   /* console.log("myForm: "+this.myForm.value.confirmationCode);*/

    //初始化时从数据库取出数据
    this.bookingItemService.getBookingItem()
        .subscribe((bItems:BookingInfo[])=>{
          this.bItems=bItems;
          console.log(this.bItems);
        });



  }
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }

}

/*
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
<div class="form-group">
    <label for="confirmationcode">Confirmation Code</label>
<input type="number" id="confirmationcode" class="form-control" formControlName="confirmationcode">
</div>
<button class="btn btn-primary" type="submit" [disabled]="!myForm.valid">Submit</button>&nbsp;&nbsp;<strong>all fields required</strong>

</form>
<hr>*/
