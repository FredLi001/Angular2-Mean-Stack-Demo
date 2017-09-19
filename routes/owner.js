var express = require('express');
var router = express.Router();
/*var BookingInfo=require('../models/bookingInfo');*/
var Owner=require('../models/owner');

//router.get('/', function (req, res, next) {
    //angular2 entry
    //res.render('index');
    /* BookingInfo.findOne({},function (err,doc) {
     if(err){
     return res.send('Error');
     }
     res.render('node',{bookingInfo:doc});
     });*/
//});//返回的doc是一个对象。bookinginfo名字可以随意取。
/*router.post('/',function (req,res,next) {

 var name = req.body.name;
 var tel = req.body.tel;
 var date = req.body.date;
 var time = req.body.time;
 var partysize = req.body.partysize;
 var tablenumber = req.body.tablenumber;
 var confirmationCode = 123;
 var owner = req.body.owner;

 console.log('date:'+req.body.date);
 console.log('time:'+time);

 var bookingInfo = new BookingInfo({
 name :name,
 tel : tel,
 date : date,
 time : time,
 partysize : partysize,
 tablenumber : tablenumber,
 confirmationCode : confirmationCode,
 owner :null
 });

 bookingInfo.save();
 res.redirect('/');
 });*/
router.get('/',function (req,res,next) {
    Owner.find()
        .exec(function (err, owner) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: owner
            });
        });
});
router.post('/',function(req,res,next){
    Owner.findOne({email:req.body.email},function(err,owner){
        if(err){

                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });

        }
        if(!owner){
            return res.status(500).json({
                title:'login failed!',
                error: {message:'login failed',loginStatus:false},

            });
        }
        if(req.body.password !== owner.password){

        }
    });
});
router.patch('/:id',function(req,res,next){
    Owner.findById(req.params.id,function(err, message){
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'No message found!',
                error: {message:'Message not found'}
            });
        }

        //update. message stands for bookingInfo

        message.restAddress=req.body.restAddress;
        message.restName=req.body.restName;
        message.restContact=req.body.restContact;
        message.restEmail=req.body.restEmail;
        console.log(message);
        message.save(function (err, result) {
            if(err){
                return res.status(500).json({
                    title:'An error occurred',
                    error:err
                });
            }
            res.status(200).json({
                message:'updated message',
                obj:result,
                saveSuccess:true
            });
        });


    });
});
module.exports = router;
