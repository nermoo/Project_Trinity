const express= require('express');
const app=express();
const router=express.Router();
const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const user=require('./../models/user');
const bodyParser=require('body-parser');

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('nermo'))

app.use(session({
    secret:"nermo",
    resave:false,
    saveUninitialized: true
  }))
  

passport.serializeUser(function(user,done){
    done(null,user.id)
});

passport.deserializeUser(function(id,done){
  user.findById(id,function(err,user){
    done(err,user);
  })
})


passport.use(new localStrategy(
    {
      usernameField:'Name',
      passwordField:'Password'
  },
    function(username,password,done){
    user.findOne({Username:username},function(err,user){
      if (err)  return done(err);
      if (!user) return done(null,false,{message:'Incorrect Username',status:false});

      bcrypt.compare(password,user.Password,function(err,res){
          if(err) return done(err);
          if(res===false) return done(null,false,{message:'Incorrect password',status:false});
          console.log(user);
          return done(null,user,{message:'success',status:true});
          

      })
    })
  }))

router.post('/',async(req,res,next)=>{

    passport.authenticate("local",(err,user,info)=>{
        if(err) res.send({info:info});
        if(!user) res.status(404).send({info:info});
        else{
          req.login(user,(err)=>{
            if(err) console.log(err); 
            res.send({user:req.user,info:info});
            console.log(info.status);
          })
        }
      })
      (req,res,next)
    // console.log(req.body);
    // const cred=req.body;

    
    // res.send(cred);
})


module.exports = router;