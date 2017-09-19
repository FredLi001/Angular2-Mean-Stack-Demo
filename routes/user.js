var express = require('express');
var router = express.Router();
var BookingInfo=require('../models/bookingInfo');


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
router.post('/',function (req,res,next) {


 var bookingInfo = new BookingInfo({
 name :req.body.name,
 tel : req.body.tel,
 date : req.body.date,
 time : req.body.time,
 partysize : req.body.partysize,
 tablenumber : req.body.tablenumber,
 confirmationCode : req.body.confirmationCode,
 owner :null
 });
console.log(bookingInfo);
 bookingInfo.save(function (err,result) {
     if(err){
         return res.status(500).json({
             title:'An error occurred',
             error:err
         });
     }
     res.status(201).json({
         message:'saved message',
         obj:result,
         saveSuccess:true
     });
 });
/* res.redirect('/');*/
 });

router.get('/',function (req,res,next) {
    BookingInfo.find()
        .exec(function (err, bookingInfos) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: bookingInfos
            });
        });
});

router.patch('/:id',function(req,res,next){
    BookingInfo.findById(req.params.id,function(err, message){
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

        message.date=req.body.date;
        message.time=req.body.time;
        message.partysize=req.body.partysize;
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
router.delete('/:id',function (req,res,next) {
    BookingInfo.findById(req.params.id,function(err, message){
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


        console.log(message);
        message.remove(function (err, result) {
            if(err){
                return res.status(500).json({
                    title:'An error occurred',
                    error:err
                });
            }
            res.status(200).json({
                message:'delete message',
                obj:result,
                saveSuccess:true
            });
        });


    });
});


module.exports = router;
