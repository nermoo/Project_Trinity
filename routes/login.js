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

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:5000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser('nerm'))
app.use(session({
    secret:"nerm",
    resave:true,
    saveUninitialized: true
  }))
  
  app.use(passport.initialize());
  app.use(passport.session());

passport.serializeUser(function(user,done) {
  
    done(null,user.id)
});

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    console.log("aravinda ok");
    done(err,user);
  })
})


passport.use(new localStrategy(
    {
      usernameField:'Name',
      passwordField:'Password'
  },
    function(username,password,done){
      console.log(username);
    User.findOne({name:username},function(err,user){
      console.log(user);
      if (err)  return done(err);
      if (!user) return done(null,false,{message:'Incorrect Username',status:false});
      
      bcrypt.compare(password,user.password,function(err,res){
        console.log(err);
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