import express from 'express';
const app=express();
const PORT=3000

app.get('/',(req,res)=>{
     res.send('hello')    
})

app.get('/profile',fn,(req,res,next)=>{
    res.send('hi')
    console.log('inside'); 
})
function fn(req,res,next){
    console.log('inside the fn');
    next();
}



app.listen(PORT,()=>{
    console.log('running');
})