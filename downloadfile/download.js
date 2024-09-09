const express=require('express')
const app=express();
const PORT=3030;
const path=require('path')


app.get('/',(req,res)=>{
    // res.send('hello world')
    res.download(path.join(__dirname,'sample.txt'))
})


app.listen(PORT,()=>{
    console.log('running');
    
})