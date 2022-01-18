const express= require('express');
const router=express.Router();
const user=require('./../models/user');
const bcrypt=require('bcrypt');

router.get('/',(req,res,next)=>{

    const userName="koli";
    const password="koli";

    const saltRounds=10;

    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err) return (err);
      bcrypt.hash(password,salt, function(err,hash){
        if(err) return(err);
        console.log(hash);
        const Usr= new user({name:userName,password:hash});
        Usr.save((error,userStatus)=>{
          if(error){
            console.log(error);
          }
          else{
            res.status(200).send(true);
            console.log("success");
            console.log(userStatus);
          }
        })

      })
          })
   
})


module.exports = router;