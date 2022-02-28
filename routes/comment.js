const express=require('express');
const comment = require('./../models/comment');

app.post('/get',(req,res,next)=>{
    let today=new Date();
    let day=today.getDate();
    let month=today.getMonth();
    console.log(req.body);
})

app.post('/save',(req,res,next)=>{
    console.log(req.body);
})


module.exports=router;