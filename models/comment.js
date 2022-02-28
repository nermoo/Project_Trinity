const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    blogid:{
        type:String,
        require:true
    },
    authName:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    day:{
        type:String,
        require:true
    },
    month:{
        type:String,
        require:true
    }
})

const comment=mongoose.model("Comments",commentSchema);
module.exports=comment;