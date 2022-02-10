const express= require('express');
const router=express.Router();
const posts=require('./../models/post');

router.get('/', async (req,res)=>{

    // const postList=await posts.aggregate([{$sample:{$size:4}}]);
    // res.send(postList);
    posts.find({},{authorid:0,post:0,title:0,day:0,month:0,tags:0,image:0,__v:0},function(err,docs){
        if(err){
            console.log(err);
        }else{
            var ids=[];
            docs.map(id=>{
                ids.push(id._id);
                console.log(ids);
             })
            res.send(ids);
        }
    })
   
})

router.post('/',(req,res)=>{
    let id=req.body.id;
    posts.find({authorid:id},{authorid:0,post:0,tags:0,image:0,__v:0},function(err,docs){
        if(err){
            console.log(err);
        }else{
            var list=[];
            docs.map(data=>{
                list.push(data);
             })
            res.send(list);
        }
    })
})

// router.get('/about',(req,res)=>{
//     res.send("hello from about");
// })


module.exports = router;