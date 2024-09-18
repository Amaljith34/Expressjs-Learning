const express=require('express');
const app=express();
const path=require('path')


app.get('/profile',fn,fn1,(req,res)=>{
    console.log('userloged');
    res.sendFile(path.join(__dirname,'./helo.html'))
})

function fn(req,res,next){
    console.log('creating token...');

        req.token=false

    next()
    
    
}
function fn1(req,res,next){

    if(req.token){
        console.log(' token approved');
        next()
    }
    else{
        console.log('no token');
        
    }
    
    
}


const PORT=process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log('RUNNING');
    
})













// const express=require('express');
// const app=express();
// const path=require('path')


// app.get('/profile',fn,fn1,(req,res)=>{
//     console.log('userloged');
//     res.sendFile(path.join(__dirname,'./helo.html'))
// })

// function fn(req,res,next){
//     console.log('creating token...');
    
    
//     setInterval(()=>{
//         const TOKEN=123
//         req.token=fn
//         next()
//     },3000)
//     // next()
    
    
// }
// function fn1(req,res,next){

//     if(req.token){
//         console.log(' token approved');
//         next()
//     }
    
    
// }


// const PORT=process.env.PORT||3001;
// app.listen(PORT,()=>{
//     console.log('RUNNING');
    
// })



// const express=require('express');
// const app=express();
// const path=require('path')

// app.get('/profile',fn,(req,res,next)=>{
//     console.log('userloged');
//     res.sendFile(path.join(__dirname,'./helo.html'))
//     next()
// },(req,res)=>{
//     console.log('last midlleware')
// })

// function fn(req,res,next){
//     console.log('creating token');
//     next()
    
// }


// const PORT=process.env.PORT||3001;
// app.listen(PORT,()=>{
//     console.log('RUNNING');
    
// })