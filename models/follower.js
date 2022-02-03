const mongoose=require('mongoose');

const followerSchema=new mongoose.Schema({
    blogger:{
        type:String,
        require:true
    },
    reader:{
        type:String,
        requrie:true
    }
})

const follower=mongoose.model("Followers",followerSchema);
module.exports=follower;