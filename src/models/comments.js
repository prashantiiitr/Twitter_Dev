const moongose=require('mongoose');
const commentSchema=new moongose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,


    },
   
},{timestamps:true});
const Comment=moongose.model('comment',commentSchema);
module.exports=Comment;