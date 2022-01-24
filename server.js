const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const passport=require('passport');
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

 

const port=5000;
app.use(cookieParser('nerm'))
app.use(session({
    secret:"nerm",
    resave:true,
    saveUninitialized: true
  }))
  
  app.use(passport.initialize());
  app.use(passport.session());

try {
  mongoose.connect('mongodb+srv://nermo:nermo@userdata.knaz0.mongodb.net/projectTrinity?retryWrites=true&w=majority',{ useUnifiedTopology: true });
  const db=mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
  console.log("successfully Connected to the mongo");
});
} catch (error) {
  console.log(error);
}



var home = require('./routes/home');
var reg = require('./routes/register');
var login = require('./routes/login');


app.use('/login',login);
app.use('/',home);
app.use('/reg',reg);



app.listen(port,()=>{
    console.log(`app is listning on port ${port}`);
});