const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{

    res.send("Aravinda is da man in dis world");
   
})

// router.get('/about',(req,res)=>{
//     res.send("hello from about");
// })


module.exports = router;