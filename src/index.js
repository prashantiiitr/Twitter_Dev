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
    const tweets=await Tweet.find({
        content:{
            $all:["First Tweet"]
        }
    })
});