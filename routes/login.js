const express= require('express');
const app=express();
const router=express.Router();
const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const User=require('./../models/user');
const bodyParser=require('body-parser');



passport.serializeUser(function(user,done) {
    done(null,user.id)
});

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    done(err,user);
  })
})


passport.use(new localStrategy(
    {
      usernameField:'Name',
      passwordField:'Password'
  },
    function(username,password,done){
    User.findOne({name:username},function(err,user){
      if (err)  return done(err);
      if (!user) return done(null,false,{message:'Incorrect Username',status:false});
      
      bcrypt.compare(password,user.password,function(err,res){
          if(err) return done(err);
          if(res===false) return done(null,false,{message:'Incorrect password',status:false});
          return done(null,user,{message:'success',status:true});
          

      })
    })
  }))

  router.post('/', async (req,res,next)=>{
    console.log(req.body);
    passport.authenticate('local',(err,user,info)=>{
      console.log("here also");
      if(err) return  res.send({info:info});
      if(!user) return res.send({info:info});
      else{
        req.login(user,(err)=>{
          console.log(user);
          if(err) console.log(err); 
          res.send({user:req.user,info:info});
          console.log(info.status);
        })
      }
    })
    (req,res,next)
  })


module.exports = router;