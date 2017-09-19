import {BookingInfo} from './bookingItem.model'
import {Http, Response,Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable}from 'rxjs';
import {Owner} from "../owner-auth-component/owner.model";


@Injectable()
export class BookingItemService{

    private items:BookingInfo[]=[];//this items array will manage all bookinginfo in front end

    private editItem:BookingInfo;//use for user edit view


    addBookingItem(item:BookingInfo){
        //在这里写判断重复的语句，和confirmationCode产生的语句。但是先不加入前段队里。等收到插入成功的res后，在插入队列并给用户提示信息。
        //上面逻辑不应该写在这里。应该写进component
        //this.items.push(item);

        //下面是定义request的语句
        const body=JSON.stringify(item);
        console.log(body);

        const headers=new Headers({'Content-Type':'application/json'});
        //below not send request, just a set up of post。request真正发出是在调用这个方法的component中用subscribe发出。
        return this.http.post('http://localhost:3000/user',body,{headers:headers})
            .map((res:Response)=>{
                const result = res.json();
                const item= new BookingInfo(result.obj.name,result.obj.tel,result.obj.date,result.obj.time,
                result.obj.partysize,result.obj.tablenumber,result.obj.confirmationCode,null,result.obj._id);
                this.items.push(item);
                return item;
            })//use map to transform the observable object to json object.
            .catch((err:Response)=>Observable.throw(err.json()));//http post方法最后返回的是Observable对象，交给call这个方法的component来处理。

    }

    getBookingItem(){
        return this.http.get('http://localhost:3000/user')
            .map((res:Response)=>{
                const bItems=res.json().obj;
                let transformedArray:BookingInfo[]=[];
                for(let bItem of bItems){
                    transformedArray.push(new BookingInfo(bItem.name,
                    bItem.tel,
                    bItem.date,
                    bItem.time,
                    bItem.partysize,
                    bItem.tablenumber,
                    bItem.confirmationCode,
                    null,
                    bItem._id));
                }
                this.items=transformedArray;//make service array the same as server.
                return transformedArray;
            })
            .catch((err:Response)=>Observable.throw(err.json()));
    }
    //取出service中目前的数组。
    getThisItems(){
        return this.items;
    }
    deleteBookingItem(item:BookingInfo){
        this.items.splice(this.items.indexOf(item),1);//delete from front end
        return this.http.delete('http://localhost:3000/user/'+item.bookingInfoId)
            .map((res:Response)=>res.json())//use map to transform the observable object to json object.
            .catch((err:Response)=>Observable.throw(err.json()));//http post方法最后返回的是Observable对象，交给call这个方法的component来处理。
    }
    updateBookingItem(item:BookingInfo){
        //下面是定义request的语句
        const body=JSON.stringify(item);
        console.log(body);

        const headers=new Headers({'Content-Type':'application/json'});
        //below not send request, just a set up of post。request真正发出是在调用这个方法的component中用subscribe发出。
        return this.http.patch('http://localhost:3000/user/'+item.bookingInfoId,body,{headers:headers})
            .map((res:Response)=>res.json())//use map to transform the observable object to json object.
            .catch((err:Response)=>Observable.throw(err.json()));//http post方法最后返回的是Observable对象，交给call这个方法的component来处理。

    }
    constructor(private http:Http){}
//owner service
    frontOwner:Owner;
    getOwner(){
        const headers=new Headers({'Content-Type':'application/json'});
        return this.http.get('http://localhost:3000/owner',{headers:headers})
            .map((res:Response)=>{
                const bItems=res.json().obj;
                console.log(bItems[0]);
                console.log('最初的文件在我上面');



                let transformedOwner:Owner;
                transformedOwner=new Owner(bItems[0].email,bItems[0].password,bItems[0]._id,bItems[0].restName,bItems[0].restEmail,bItems[0].restContact,bItems[0].restAddress);
                /*for(let bItem of bItems){
                    transformedArray.push(new BookingInfo(bItem.name,
                        bItem.tel,
                        bItem.date,
                        bItem.time,
                        bItem.partysize,
                        bItem.tablenumber,
                        bItem.confirmationCode,
                        null,
                        bItem._id));
                }*/
                this.frontOwner=transformedOwner;//make service array the same as server.
                console.log(this.frontOwner);
                console.log('this.forntzaiwoshangmian');
                return transformedOwner;d
            })
            .catch((err:Response)=>Observable.throw(err.json()));
    }

logout(){
    localStorage.clear();
}
isLogin(){
    return localStorage.getItem('token')!== null;
}
//update owner

    updateOwner(item:Owner){
        //下面是定义request的语句
        const body=JSON.stringify(item);
        console.log(body);

        const headers=new Headers({'Content-Type':'application/json'});
        //below not send request, just a set up of post。request真正发出是在调用这个方法的component中用subscribe发出。
        return this.http.patch('http://localhost:3000/owner/'+item.ownerId,body,{headers:headers})
            .map((res:Response)=>res.json())//use map to transform the observable object to json object.
            .catch((err:Response)=>Observable.throw(err.json()));//http post方法最后返回的是Observable对象，交给call这个方法的component来处理。

    }


}