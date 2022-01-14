const express= require('express');
const router=express.Router();
const user=require('./../models/user');
const bcrypt=require()

router.get('/',(req,res,next)=>{

    const userName=req.body.name;
    const password=req.body.pass;
    const usr=new user({name:userName,password:password});

    usr.save((err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(true);
            console.log("success");
            console.log(user);
        }
    })

   
})


module.exports = router;