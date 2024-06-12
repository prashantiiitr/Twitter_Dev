const express=require('express');
const connect=require('./config/database');
const Tweet=require('./models/tweet');
const Comment=require('./models/comments');

const TweetRepository=require('./repository/tweet-repository');

const app=express();

app.listen(3000,async ()=>{
    console.log("Server started");
    await connect();
    console.log("mongodb connected");
    //const tweet=await Tweet.create({
       // content:'Fourth Tweet'
        
   // });

  // const tweet=await Tweet.findById('6669379bd98b41c3386e50b0');
   //tweet.userEmail='b@c.com'
   //await tweet.save(); 

   
   const tweetRepo=new TweetRepository();
   //const tweet=await tweetRepo.get('6669379bd98b41c3386e50b0');
   //const tweet=tweetRepo.create({content:'my tweet'});
   //tweet.comment.push({content:'first comment'});
   //await tweet.save();


   //const tweet=tweetRepo.create({content:'Tweet with comment schema'})
   //const comment=await Comment.create({content:'new comment'});
   //tweet.comment.push({content:'first comment'});
   //await tweet.save();

   console.log(tweet);
})
