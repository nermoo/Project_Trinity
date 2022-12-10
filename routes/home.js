const express= require('express');
const router=express.Router();
const posts=require('./../models/post');
const users=require('./../models/user');
const comment=require('../models/comment');

router.get('/', async (req,res)=>{

    posts.aggregate([{$sample:{size: 20}},{$project:{authorid:0,post:0,title:0,day:0,month:0,tags:0,image:0,__v:0}}],function(err,docs){
        if(err){
            console.log(err);
        }else{
            var ids=[];
            docs.map(id=>{
                ids.push(id._id);
             })
            res.send(ids);
        }
    })
   
})

router.post('/',async(req,res)=>{
    let id=req.body.id;
    posts.find({authorid:id},{authorid:0,post:0,tags:0,image:0,__v:0},function(err,docs){
        if(err){
            console.log(err);
        }else{
            var list=[];
            docs.map(data=>{
                comment.count({blogid:data.id,authName:{$ne:null}},(err,cnum)=>{
                    if(err){
                        console.log(err);
                    }
                    list.push({data:data,comments:cnum});
                })

             })
             setTimeout(()=>{
                 res.send(list);
            },2500)
        }
    })
})

// router.get('/about',(req,res)=>{
//     res.send("hello from about");
// })

router.get('/quick/tags',async (req,res,next)=>{
    
    const tags=[];

    await posts.aggregate([
        { 
            $addFields: { 
            "tag": { "$split": [ "$tags", "," ] } 
        }},
        { 
            $unwind : "$tag" 
        },
        {
            $group:{
                _id:'$tag',
                count:{$sum:1}
         }},
         { 
             $limit : 5 
         },
         {
             $sort:{count:-1}
         }
    ],function(err,docs){

        if(err){
            console.log(err);
        }else{
            console.log(docs);
            docs.map(doc=>{
                tags.push(doc)
            })
            res.send({tags:tags});
        }
            
            
        });

    

    
})


router.get('/quick/auth', (req,res,next)=>{

    const authors=[];



     posts.aggregate([
        {
            $group:{
             _id:'$authorid',
             count:{$sum:1}
         }},
         { 
             $limit : 5 
         },
         {
             $sort:{count:-1}
         }
     ], function(err,docs){
 
          docs.map(doc=>{
             users.findById(doc._id,{_id:1,name:1,profilePic:1},function(err,docs){
                 if(err){
                     console.log(err);
                 }else{  
                     console.log(docs);
                     authors.push(docs);
                 }
             })
             
         })
           setTimeout(()=>{

               res.send({authors:authors})
           },3000)
        
 
     })

     
})


module.exports = router;