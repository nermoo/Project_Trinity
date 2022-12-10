const express=require('express');
const router=express.Router();
const user=require('./../models/user');
const saved=require('./../models/savedItem');
const post=require('./../models/post');
const followers=require('../models/follower');

router.post('/info',(req,res)=>{
    var id=req.body.id;
            var items=[];
            saved.find({userId:id},function(err,docs){
                docs.map(doc=>(
                    post.findById(doc.postId,{day:0,month:0,tags:0,image:0,post:0},function(err,item){
                        if(item?.authorid==null){
                            console.log("null");
                        }else{
                            user.findById(item?.authorid,{email:0,password:0,role:0,profilePic:0},function(err,name){
                                items.push({item,name});
                            })
                        }
                    })
                ))
            })
            setTimeout(()=>{
                res.send(items);
            }
            , 2000)
        
})

router.post('/reader',(req,res)=>{
    var id=req.body.id;
    user.findById(id,{email:0,password:0,role:0},async function(err,doc){
        if(err){
            console.log(err);
        }else{
            var userInfo=doc;
            var savedCount
            saved.find({userId:id},function(err,docs){
                savedCount=docs.length;
            });
            setTimeout(()=>{
                res.send({userInfo,savedCount})
            }
            , 2000)
        }
})

})

router.post('/blogger',(req,res)=>{
    var id=req.body.id;
    user.findById(id,{email:0,password:0,role:0},async function(err,doc){
        if(err){
            console.log(err);
        }else{
            var userInfo=doc;
            var savedCount
            saved.find({userId:id},function(err,docs){
                savedCount=docs.length;
            });
            setTimeout(()=>{
                res.send({userInfo,savedCount})
            }
            , 2000)
        }
})

})

router.post('/followers',(req,res)=>{
    const id=req.body.id;
    followers.find({blogger:id},(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            var list=[];
            docs.map(data=>{
                user.findById(data.reader,{email:0,password:0,role:0},(err,user)=>{
                    if(err){
                        console.log(err);
                    }else{
                        list.push(user);
                    }
                })
             })
             setTimeout(()=>{
                res.send(list);
            }
            , 2000)
        }
    })

})

router.post('/following',(req,res)=>{
    const id=req.body.id;
    followers.find({reader:id},(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            var list=[];
            docs.map(data=>{
                user.findById(data.blogger,{email:0,password:0,role:0},(err,user)=>{
                    if(err){
                        console.log(err);
                    }else{
                        list.push(user);
                    }
                })
             })
             setTimeout(()=>{
                res.send(list);
            }
            , 2000)
        }
    })

})



module.exports = router;