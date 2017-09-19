var mongoose = require('mongoose');//require mongoose module
var Schema = mongoose.Schema;// require mongoose schema

var schema = new Schema({
    name:{type:String,required:true},
    tel:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    partysize:{type:String,required:true},
    tablenumber:{type:String,required:true},
    confirmationCode:{type:Number,required:true},
    owner:{type:Schema.Types.ObjectId,ref:'Owner'}


});//define schema

//define data model using schema
module.exports=mongoose.model('BookingInfo',schema);
//define model name as BookingInfo,later we use it to create new BookingInfo() object,
//in mongo db, it will create collections name as bookinginfos, automatically.