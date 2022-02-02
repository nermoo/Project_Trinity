const express=require('express');
const router=express.Router();
const followers=require('../models/follower');

router.get('/', async (req,res,next)=>{

    const follower= req.body.follower;
    const following= req.body.following;

    const follow=new followers({reader:follower,blogger:following});
    follow.save((err,status)=>{
        if(err){
            console.log(err);
        }else{
            console.log(status);
        }
    })


     

    //userslawa ganda one unge id eka use krla

  })





module.exports=router;