const express=require('express');
const app=express();
const PORT=3020;
app.use(express.json());
app.post('/submit',(req,res)=>{
    const {name,age}=req.body;
    res.send(`recivedata name= ${name} and age is ${age}`)
})

app.listen(PORT,()=>{
    console.log('RUNNING');
    
})