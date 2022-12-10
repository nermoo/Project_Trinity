const express=require('express');
const router=express.Router();
const follower=require('../models/user');

// this is working

router.get('/', async (req,res,next)=>{

    const id=req.body.id;

    follower.findById(id, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            let iden=docs._id;
            res.send(iden)
        }
    });


  })

module.exports= router;