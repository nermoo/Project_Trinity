const express= require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{

    res.send("Aravinda is an registered man");
   
})


module.exports = router;