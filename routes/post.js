const express=require('express');
const blog=require('./../models/post');
const router=express.Router();


router.post('/save',(req,res)=>{
        let title=req.body.title;
        let post=req.body.post;
        let id=req.body.authid;
        let tags=req.body.tags;
        let date=req.body.date;

        const blogPost=new blog({authorid:id, title:title, post:post, date:date, tags:tags});
        blogPost.save((err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        })
})




module.exports=router;