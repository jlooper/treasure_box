var Photon=require('../models/photon');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/open')
    .post(function(req,res){
        var photon=new Photon(req.body);
        photon.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Box Opened!'});
        });
    });
router.route('/close')
    .post(function(req,res){
        var photon=new Photon(req.body);
        photon.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Box Closed!'});
        });
    });

module.exports=router;

