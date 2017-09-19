var mongoose = require('mongoose');//require mongoose module
var Schema = mongoose.Schema;// require mongoose schema

var schema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    bookingInfos:[{type:Schema.Types.ObjectId,ref:'BookingInfo'}],
    restName:{type:String},
    restContact:{type:String},
    restEmail:{type:String},
    restAddress:{type:String},



});//define schema

//define data model using schema
module.exports=mongoose.model('Owner',schema);
//define model name as BookingInfo,later we use it to create new BookingInfo() object,
//in mongo db, it will create collections name as bookinginfos, automatically.