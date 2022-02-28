const express=require('express');
const router=express.Router();
const comment = require('./../models/comment');

router.post('/get',(req,res,next)=>{
    let today=new Date();
    let day=today.getDate();
    let month=today.getMonth();
    console.log(req.body);
})

router.post('/save',(req,res,next)=>{
    console.log(req.body);
    res.send('hello');
})


module.exports=router;