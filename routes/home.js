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

router.get('/quick',(req,res,next)=>{
    // posts.aggregate([{$group:{
    //     _id:'$authorid',
    //     count:{$sum:1}
    // }}],function(err,docs){
    //     console.log('here are the' );
    //     console.log(docs);
    //     res.send(docs);
    // }) 

    posts.aggregate([
        { "$addFields": { 
        "tag": { "$split": [ "$tags", "," ] } 
        }},
        { $unwind : "$tag" },
        {$group:{
                _id:'$tag',
                count:{$sum:1}
         }},
         {
             $sort:{count:-1}
         }
],function(err,docs){
        console.log('here are the' );
        console.log(docs);
        res.send(docs);
    });
    
    
    
    // methnta unwind use krla blnda one loop krnda puluwanda kyla
})


module.exports = router;