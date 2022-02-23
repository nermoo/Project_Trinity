const express=require('express');
const router=express.Router();
const followers=require('../models/follower');

router.post('/', async (req,res,next)=>{

    const follower= req.body.follower;
    const following= req.body.following;

    const follow=new followers({reader:follower,blogger:following});
    follow.save((err,stat)=>{
        if(err){
            console.log(err);
            res.send({status:false});
        }else{
            console.log(stat);
            res.send({status:true});
        }
    })
}) 

    module.exports= router;