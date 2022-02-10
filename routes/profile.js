const express=require('express');
const router=express.Router();
const user=require('./../models/user');

router.post('/blogger',(req,res)=>{
    var id=req.body.id;
    user.findById(id,{email:0,password:0,role:0},function(err,doc){
        if(err){
            console.log(err);
        }else{
            res.send(doc);
        }
    })
})



module.exports = router;