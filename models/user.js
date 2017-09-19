var mongoose = require('mongoose');//require mongoose module
var Schema = mongoose.Schema;// require mongoose schema
var mongooseUniqueValidator=require('mongoose-unique-validator');//require mongoose unique validator module

var schema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    messages:[{type:Schema.Types.ObjectId,ref:'Message'}] //one user can have multiply messages
});//define schema


//add plugin to schema
schema.plugin(mongooseUniqueValidator);


//define data model using schema
module.exports=mongoose.model('User',schema);