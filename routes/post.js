const express=require('express');
const blog=require('./../models/post');
const user=require('./../models/user');
const router=express.Router();
const multer=require('multer');
const path=require('path');
const { convert } = require('html-to-text');


const DIR = 'public/posts';

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


router.post('/save',upload.single("image"),(req,res)=>{
        let title=req.body.title;
        let post=req.body.post;
        let id=req.body.bloggerId;
        let tags=req.body.tags;
        let today=new Date();
        let day=today.getDate();
        let month=today.getMonth();
        let imageName=req.file.filename;

        const blogPost=new blog({authorid:id, title:title, post:post, day:day, month:month, tags:tags, image:imageName});
        blogPost.save((err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res);
                res.status(200).send({status:true});
            }
        })
})

router.post('/post',(req,res)=>{
    let postid=req.body.id;
    console.log(postid);
    blog.findById(postid,function(err,post){
        if(err){
            console.log(err);

        }else{
            console.log(post);
            const content = convert(post.post,{wordwrap: 130});
            console.log(content);
            const tags=post.tags.split(',');
            console.log(tags);
            res.send({post,tags,content});//destructure the res and send
        }
    })

})

router.post('/author',(req,res)=>{
    let authid=req.body.id;
    console.log(authid);
    user.findById(authid, function (err, auth) {
        if (err){
            console.log(err);
        }
        else{
            res.send({name:auth.name,image:auth.profilePic});
        }
    });

})




module.exports=router;