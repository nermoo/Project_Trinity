const mongoose=require('mongoose');

const followerSchema=new mongoose.Schema({
    following:{
        type:String,
        require:true
    },
    follower:{
        type:string,
        requrie:true
    }
})

const follower=mongoose.model("Followers",followerSchema);
module.exports=follower;