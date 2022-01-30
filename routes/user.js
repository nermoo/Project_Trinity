const express=require('express');
const router=express.Router();
const fs=require('fs');
const User=require('./../models/user');

router.get('/', async (req,res,next)=>{

    file='./'+'public'+'/1643222638828.jpg';
    fs.access(file,(fs.constants.F_OK,err=>{
    console.log(__dirname);
    console.log(`${file} ${err?'nope':'yes'}`);

}))

fs.readFile(file,(err,content)=>{
    if(err){
        // res.writeHead(404,{'Content-type':'text/html'});
        res.send("No image");
    }else{
        res.writeHead(200,{'Content-type':'image/jpg'});
        
    }

    //userslawa ganda one unge id eka use krla
    
})
  })





module.exports=router;