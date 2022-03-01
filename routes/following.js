const express=require('express');
const router=express.Router();
const following=require('../models/follower');

router.post('/', async (req,res,next)=>{

    const id=req.body.id;
    following.find({reader:id},function(err,docs){
        if(err){
            console.log(err);
        }else{
            let list=[];
            docs.map(doc=>{
                list.push(doc.blogger);
                })
            let dislist=[...new Set(list)];
            res.send(dislist)
        }
    })
}) 

    module.exports= router;