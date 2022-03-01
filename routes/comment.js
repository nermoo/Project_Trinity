const express=require('express');
const router=express.Router();
const comment = require('./../models/comment');

router.post('/get',(req,res,next)=>{
    console.log(req.body.id);
    let id=req.body.id;
    comment.find({blogid:id},function(err,docs){
        if(err){
            console.log(err);
        }else{
            var list=[];
            docs.map(data=>{
                list.push(data);
             })
             console.log(list);
            res.send(list);
        }
    })
    
})

router.post('/save',(req,res,next)=>{

    let today=new Date();
    let day=today.getDate();
    let month=today.getMonth();
    const com=new comment({blogid:req.body.blogid,authName:req.body.authName,comment:req.body.comment,day:day,month:month});
    com.save((err,resp)=>{
        if(err){
            console.log(err);
        }else{
            res.send({status:true});
        }
    })
})


module.exports=router;