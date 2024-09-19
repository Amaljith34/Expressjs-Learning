const express=require('express');
const app=express();
const path=require('path');
const PORT=4000;
const productRouter=require('./product')
const userRouter=require('./user')
app.use('/product',productRouter)
app.use('/user',userRouter)

app.get('*',(req,res)=>{
    // res.status(404)
    //   res.send(`<h1>404</h1>`)
    res.status(404).send(`<h1>404</h1>`)
})

app.listen(PORT,()=>{
    console.log('running');
})