const express=require('express');
const mongoose=require('mongoose');
const app=express();


mongoose.connect('mongodb://127.0.0.1:27017/test')



app.get("/",(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('runing');
})