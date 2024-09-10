const express=require('express');
const app=express();
const bodyParser=require('body-parser')

//middleware
app.use((req,res,next)=>{
    // res.send('hit on midleware')
    next()
})

//body parser utl encoded  middleware
app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('indexpage');
})

app.get('/student',(req,res)=>{
    console.log(req.body);
    res.send('student')
    
})

app.post('/login',(req,res)=>{
    // res.send('it is a login requist')
    res.send(req.body)
})




app.listen(3002,()=>{
    console.log('run');
    
})