var mongoose = require('mongoose');//require mongoose module
var Schema = mongoose.Schema;// require mongoose schema

var schema = new Schema({
    content:{type:String,required:true},
    user:{type:Schema.Types.ObjectId,ref:'User'}
});//define schema

//define data model using schema
module.exports=mongoose.model('Message',schema);