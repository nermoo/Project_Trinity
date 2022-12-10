const express=require('express');
const blog=require('./../models/post');
const user=require('./../models/user');
const savedItem=require('./../models/savedItem');
const router=express.Router();
const multer=require('multer');
const path=require('path');
const { convert } = require('html-to-text');
var gtts = require('node-gtts')('en');


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
        blogPost.save((err,response)=>{
            if(err){
                console.log(err);
            }else{
                console.log(response);
                res.send({status:true});
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
            const content = convert(post.post,{wordwrap: 130});
            const tags=post.tags.split(',');
            res.send({post,tags,content});//destructure the res and send
        }
    })

})

router.post('/content',(req,res)=>{
    let postid=req.body.id;
    blog.findById(postid,function(err,post){
        if(err){
            console.log(err);

        }else{
            const tags=post.tags.split(',');
            res.send({post,tags});
        }
    })
})

router.post('/author',(req,res)=>{
    let authid=req.body.id;
    user.findById(authid, function (err, auth) {
        if (err){
            console.log(err);
        }
        else{
            res.send({name:auth.name,image:auth.profilePic,id:auth.id});
        }
    });

})

router.post('/saved',(req,res)=>{
    const ids=req.body;
    const item=new savedItem({postId:ids.postid, userId:ids.userid});
    item.save((err,response)=>{
        if(err){
            console.log(err);
            res.send({status:false})
        }else{
            res.send({status:true});
        }
    })
})

router.post('/audio',(req,res)=>{
    console.log(req.body);
    const id=req.body.id;
    blog.findById(id,{authorid:0,title:0,day:0,month:0,tags:0,image:0},function(err,content){
        if(err){
            console.log(err);
        }else{
            const txt = convert(content.post,{wordwrap: 130});
            const __dirname='./public/audio'
            var name=id;
            var filename=name+'.wav';
            var filepath = path.join(__dirname, filename);
            gtts.save(filepath, txt, function() {
            console.log('save done');
            res.send("done")
            })
        }
    })
    
})



module.exports=router;