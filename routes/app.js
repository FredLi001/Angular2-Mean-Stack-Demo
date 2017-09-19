var express = require('express');
var router = express.Router();
/*var BookingInfo=require('../models/bookingInfo');*/


router.get('/', function (req, res, next) {
    //angular2 entry
        res.render('index');
  /* BookingInfo.findOne({},function (err,doc) {
       if(err){
           return res.send('Error');
       }
       res.render('node',{bookingInfo:doc});
   });*/
});//返回的doc是一个对象。bookinginfo名字可以随意取。
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

module.exports = router;
