const express=require('express')
const app=express();
const PORT=3030;
const path=require('path')


// app.get('/',(req,res)=>{
    // res.send('hello world')
    // res.download(path.join(__dirname,'sample.txt'))
// })
// app.use(express.static(path.join(__dirname,'public')))

app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    // res.send('hello world')
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/download',(req,res)=>{
    // res.send('hello world')
    res.download(path.join(__dirname,'public/images/kitten.jpeg'))
})



app.listen(PORT,()=>{
    console.log('running');
    
})