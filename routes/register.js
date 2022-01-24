const express= require('express');
const router=express.Router();
const user=require('./../models/user');
const bcrypt=require('bcrypt');
const multer=require('multer');
const uuidv4=require('uuid');


const DIR = './../public/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({   //https://morioh.com/p/5c99be0fb5aa here is the link
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//       if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//           cb(null, true);
//       } else {
//           cb(null, false);
//           return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//       }
//   }
// });

router.post('/',(req,res,next)=>{

    console.log(req.body)
    res.status(200).send(true);

    // const saltRounds=10;
    // const url = req.protocol + '://' + req.get('host');
    // const path= url + '/public/' + req.file.filename;

    // bcrypt.genSalt(saltRounds,function(err,salt){
    //   if(err) return (err);
    //   bcrypt.hash(password,salt, function(err,hash){
    //     if(err) return(err);
    //     console.log(hash);
    //     const Usr= new user({name:userName,password:hash,profilePic:path});
    //     Usr.save((error,userStatus)=>{
    //       if(error){
    //         console.log(error);
    //       }
    //       else{
    //         res.status(200).send(true);
    //         console.log("success");
    //         console.log(userStatus);
    //       }
    //     })

    //   })
    //       })
   
})


module.exports = router;