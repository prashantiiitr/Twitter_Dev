const moongose=require('mongoose');

const  connect= async()=>{
    await moongose.connect('mongodb://localhost/twitter_Dev')
}

module.exports=connect;