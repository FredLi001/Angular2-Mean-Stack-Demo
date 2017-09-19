import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {BookingInfo} from "../../bookingItem/bookingItem.model";

import { Component,Directive, forwardRef,
    Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
    Validators,AbstractControl,ValidatorFn } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-book-table',
  templateUrl: './user-book-table.component.html',
  styleUrls: ['./user-book-table.component.css']

})
export class UserBookTableComponent implements OnInit {

  myForm:FormGroup;
  bItems:BookingInfo[]=[];//数据库中的数组
    canOrder:boolean;
    sameUser:boolean;
    needCheck:boolean;
    showSuccess:boolean;
    conCode:number;
  constructor(private bookingItemService:BookingItemService) { }


  onSubmit(){
      this.canOrder=true;
      this.sameUser=false;
      this.needCheck=false;
      this.showSuccess=false;
    console.log(this.myForm);
    console.log('name:'+this.myForm.value.name);
    console.log('tel:'+this.myForm.value.tel);

    this.conCode=Math.floor(Math.random()*10000);

   const bookingItem= new BookingInfo(
       this.myForm.value.name,
       this.myForm.value.tel,
       this.myForm.value.date,
       this.myForm.value.time,
       this.myForm.value.partysize,
       this.myForm.value.tablenumber,
      this.conCode
   );
   console.log('bookingItem:'+bookingItem.confirmationCode);

   //提交之前做判断
      for(let i =0; i<this.bItems.length;i++ ){
          if(new Date(this.bItems[i].date).getTime() === new Date(this.myForm.value.date).getTime()){
            if( this.bItems[i].tablenumber === this.myForm.value.tablenumber){
                if(this.bItems[i].name===this.myForm.value.name && this.bItems[i].tel===this.myForm.value.tel &&
                    this.bItems[i].time === this.myForm.value.time){
                    this.sameUser=true;
                    this.canOrder=false;
                }
                 else if(Math.abs((this.bItems[i].time.split(':')[0]-this.myForm.value.time.split(':')[0])*60
                    -(this.bItems[i].time.split(':')[1]-this.myForm.value.time.split(':')[1]))<120){
                        this.canOrder=false;
                        this.needCheck=true;
                        /*this.sameUser=false;*/
                    }
            }

          }

      }
      console.log('this.sameUser: '+this.sameUser);

      if(this.canOrder){
          //call the add function will return a Observable object. and we need to use subscribe() to make the post actually happen.
          // to actually send the request.
          this.bookingItemService.addBookingItem(bookingItem).subscribe(
              data=>{console.log(data);
                        if(data){
                            this.showSuccess=true;
                            }
                        },//返回的提示信息，报告订单是否插入成功。利用这个信息在界面上输出提示。状态成功，并显示confirmation code
              error=>console.log(error)

          );
      }

      if(this.sameUser){
          //输出提示，已经订过了，要修改请点击链接，跳到cancel和edit界面
      }
      //又不是同一个用户，并且信息重复,输出提示
      if(this.needCheck){
          //输出提示，this {date} and {time}, this {table} is not available, please try another table,or change your date and time.
      }

       this.myForm.reset();



   //call the add function will return a Observable object. and we need to use subscribe() to make the post actually happen.
    // to actually send the request.
  /* this.bookingItemService.addBookingItem(bookingItem).subscribe(
       data=>console.log(data),
       error=>console.log(error)

   );*/
  }



  ngOnInit() {

    //to create form object by ourself
    this.myForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      tel:new FormControl(null,[Validators.required,
          Validators.pattern("^[0-9]+$")]),
      date:new FormControl(null,Validators.required),
      time:new FormControl(null,Validators.required),
      partysize:new FormControl(null,Validators.required),
      tablenumber:new FormControl(null,Validators.required)
    });
//初始化时从数据库取出数据
    this.bookingItemService.getBookingItem()
        .subscribe((bItems:BookingInfo[])=>{
        this.bItems=bItems;
        console.log(this.bItems);
        });

  }

}
