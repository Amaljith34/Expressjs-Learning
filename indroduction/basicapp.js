const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
      res.send('hello world this is express')
})


//productpage
// app.get('/product',(req,res)=>{
//     res.send('this is product page');
// })

// ///aboutpage
// app.get('/about',(req,res)=>{
//     res.send('this is about page');
// })

// // contact
// app.get('/contact',(req,res)=>{
//     res.send('this is contact page');
// })


// app.listen(PORT,()=>{
//     console.log('running');
// })


////////methods

app.post('/product',(req,res)=>{
    res.send('this is product page');
})

///aboutpage
app.put('/about',(req,res)=>{
    res.send('this is about page');
})

// contact
app.delete('/contact',(req,res)=>{
    res.send('this is contact page');
})


app.listen(PORT,()=>{
    console.log('running');
})