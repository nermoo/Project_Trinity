const express=require('express');
const router=express.Router();
const fs=require('fs');
// D:\projects\miniProject\repo\public\1643222638828.jpg


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
        res.end(content);
    }
})
  })





module.exports=router;