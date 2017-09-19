import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {Owner} from "../owner.model";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
    myForm:FormGroup;
    owner:Owner;
    loginSuccess:boolean=false;
    plus:boolean=false;
    logout:boolean=false;

    onLogin(form:NgForm){
       /* console.log(this.myForm);*/
        /*this.myForm.reset();*/
        //login validation
        this.plus=true;
        this.logout=false;
        console.log(form.value.email);
        console.log("hahahah");
        console.log(this.owner);

        if(form.value.email === this.owner.email &&
            form.value.password === this.owner.password){
            this.loginSuccess=true;
            localStorage.setItem('token',"123");

        }
        console.log(this.loginSuccess);
        form.resetForm();
    }
    onLogout(form:NgForm){
        this.logout=true;
        this.loginSuccess=false;
        this.plus=false;
        this.bookingItemService.logout();
        form.resetForm();
    }
    constructor(private bookingItemService:BookingItemService) { }

    ngOnInit() {
       /* this.myForm = new FormGroup({
            email:new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password:new FormControl(null,Validators.required)

        });*/

        //初始化时从数据库取出数据
        this.bookingItemService.getOwner()
            .subscribe((bItem:Owner)=>{
                this.owner=bItem;
                console.log(bItem);
                console.log('chushihua');
                console.log(this.owner);


            });
    }

    onSubmit1(f){}

    //login validation

    isLogin(){
        return this.bookingItemService.isLogin();
    }
}
