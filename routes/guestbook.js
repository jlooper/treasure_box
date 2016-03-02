var Guestbook=require('../models/guestbook');
var express=require('express');

var router=express.Router();

router.route('/guestbook')
    .get(function(req,res){
       Guestbook.find(function(err,guestbook){
           if(err)
                res.send(err);
           res.json(guestbook);
       }).sort({date: -1});
    })

    .post(function(req,res){
        console.log(req.body)
        var guestbook=new Guestbook(req.body);
        guestbook.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Guestbook message submitted'});
        });
    });


module.exports=router;

