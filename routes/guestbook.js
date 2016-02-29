var Guestbook=require('../models/guestbook');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/guestbook')
    .get(function(req,res){
       Guestbook.find(function(err,guestbook){
           if(err)
                res.send(err);
           res.json(guestbook);
       });
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

router.route('/guestbook/:id')
    .put(function(req,res){
        Guestbook.findOne({_id:req.params.id},function(err,guestbook){

            if(err)
                res.send(err);

           for(prop in req.body){
                guestbook[prop]=req.body[prop];
           }

            // save the guestbook request
            guestbook.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Guestbook updated!' });
            });

        });
    })

    .get(function(req,res){
        Guestbook.findOne({_id:req.params.id},function(err, guestbook) {
            if(err)
                res.send(err);

            res.json(guestbook);
        });
    })

    .delete(function(req,res){
        Guestbook.remove({
            _id: req.params.id
        }, function(err, guestbook) {
            if (err)
                res.send(err);

            res.json({ message: 'Request Successfully deleted' });
        });
    });

module.exports=router;

