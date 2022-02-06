const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    authorid:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    post:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    tags:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

const blog=mongoose.model("posts",blogSchema);
module.exports=blog;