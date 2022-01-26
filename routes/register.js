const express= require('express');
const router=express.Router();
const user=require('./../models/user');
const bcrypt=require('bcrypt');
const multer=require('multer');
const uuidv4=require('uuid');
const path=require('path');


const DIR = 'public';

// var upload=multer();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null,fileName);
    }
});

var upload = multer({   //https://morioh.com/p/5c99be0fb5aa here is the link
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

router.post('/',upload.single("image"),(req,res,next)=>{

    
    const userName=req.body.userName;
    const email=req.body.email;
    const role=req.body.role;
    const password=req.body.password;
    const saltRounds=10;
    // const url = req.protocol + '://' + req.get('host');
    // const path= url + '/public/' + req.file.filename;
    imageName=req.file.filename;

    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err) return (err);
      bcrypt.hash(password,salt, function(err,hash){
        if(err) return(err);
        console.log(hash);
        const Usr= new user({name:userName,password:hash,profilePic:imageName,role:role,email:email});
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