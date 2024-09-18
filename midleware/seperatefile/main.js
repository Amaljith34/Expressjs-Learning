const express=require('express');
const app=express();
const path=require('path')
const fn=require('./create')
const fn1=require('./validation')



app.get('/profile',fn,fn1,(req,res)=>{
    console.log('userloged');
    res.send('sucess')
})
app.get('/',(req,res,next)=>{
    console.log('heloo');
    res.send('home midleware')
    next()
})
app.use((req,res,next)=>{
    console.log(new Date());
    next()
 })
 




const PORT=process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log('RUNNING');
    
})