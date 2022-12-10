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
            res.send({status:true});
        }
    })
    //userslawa ganda one unge id eka use krla

  })

  router.post('/status', async (req,res,next)=>{
      console.log(req.body);
      followers.find({reader:req.body.reader,blogger:req.body.author},function(err,docs){
        console.log(docs);
        if(err){
            console.log(err);
        }else{
            if(docs.length>0){
                res.send({status:true});
            }
            else{
                res.send({status:false});
            }
        }
      })
  })

  router.post('/unfollow', async (req,res,next)=>{
      followers.deleteOne({reader:req.body.follower,blogger:req.body.following},function(err,res){
          console.log(res);
      })
  })





module.exports=router;