const express=require('express');
const router=express.Router();
const user=require('./../models/user');
const saved=require('./../models/savedItem');
const post=require('./../models/post');

router.post('/info',(req,res)=>{
    var id=req.body.id;
            var items=[];
            saved.find({userId:id},function(err,docs){   
                docs.map(doc=>(
                    post.findById(doc.postId,{day:0,month:0,tags:0,image:0,post:0},function(err,item){
                        user.findById(item.authorid,{email:0,password:0,role:0,profilePic:0},function(err,name){
                            items.push({item,name});
                        })
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





module.exports = router;