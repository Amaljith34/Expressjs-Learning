// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('home page')

// })
// app.get('/product',fn,fn1,(req,res)=>{
//     res.send('hiii')
//     console.log('completae');
    
// })
// function fn(req,res,next){
//     const Token=545
//      req.token=fn
//     console.log('creating token');
//      next()   
// }
// function fn1(req,res,next){
//     if(req.token){
//         console.log('sucess');
        
//     }
//     next()
// }

// app.listen(2001,()=>{
//     console.log('running');
// })


const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('heloo')
    console.log('user loged');    
})
app.get('/product',fn,(req,res,next)=>{
    console.log('inside product');
    res.send('hi')
})

function fn(req,res,next){
    console.log('inside fn');
     next()
}

app.listen(3001,()=>{
    console.log('running');
})

