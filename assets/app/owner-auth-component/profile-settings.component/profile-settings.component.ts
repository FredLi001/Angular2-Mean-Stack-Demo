import {Component, NgZone, OnInit} from "@angular/core";
import {BookingItemService} from "../../bookingItem/bookingItem.service";
import {Owner} from "../owner.model";
import {NgForm} from "@angular/forms";
@Component({
    selector:'profile-settings',
    templateUrl:'./profile-settings.component.html'
})
export class ProfileSettingsComponent implements OnInit{
    owner:Owner;
    name:string;
    contact:string;
    address:string;
    email:string;
    showF:boolean=false;
    constructor(private bookingItemService:BookingItemService,private zone: NgZone) { }

    ngOnInit() {
        //初始化时从数据库取出数据
        this.bookingItemService.getOwner()
            .subscribe((bItem:Owner)=>{
                this.owner=bItem;
                console.log(bItem);
                console.log('chushihua');
                console.log(this.owner);
                this.name=this.owner.restName;
                this.contact=this.owner.restContact;
                this.email=this.owner.restEmail;
                this.address=this.owner.restAddress;

            });
    }

    onSubmit2(f){}
    onUpdate(form:NgForm){
    //update
        this.owner.restName=form.value.name;
        this.owner.restContact=form.value.contact;
        this.owner.restEmail=form.value.email;
        this.owner.restAddress=form.value.address;

        this.bookingItemService.updateOwner(this.owner)
            .subscribe(
                result=>{
                    console.log("update: "+result);

                },
                err=>console.log(err)
            );
        //reload
        this.zone.runOutsideAngular(() => {
            location.reload();
        });
    }


}