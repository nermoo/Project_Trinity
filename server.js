const express=require('express');
const app=express();


var home = require('./routes/home');
var reg = require('./routes/register');
var login = require('./routes/login');
 


 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port=5000;


// app.get('/',(req,res)=>{
//     res.send("aravinda is da man");
// })
app.use('/login',login);
app.use('/',home);
app.use('/reg',reg);



app.listen(port,()=>{
    console.log(`app is listning on port ${port}`);
});