const mongoose=require('mongoose');


const savedSchema=new mongoose.Schema({
    postId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
});

const saved=mongoose.model("savedItems",savedSchema);
module.exports=saved;