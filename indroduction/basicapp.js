const express=require('express');
const app=express();
const path=require('path')
const PORT=3001;



///req.quary

// app.get('/',(req,res)=>{
//      res.send('helo')
// })
// app.get('/student',(req,res)=>{
//     res.send(req.query)
// })





// app.get('/',(req,res)=>{
//       res.send('hello world this is express')
// })

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









////////methods


// app.post('/product',(req,res)=>{
//     res.send('this is product page');
// })

// ///aboutpage
// app.put('/about',(req,res)=>{
//     res.send('this is about page');
// })

// // contact
// app.delete('/contact',(req,res)=>{
//     res.send('this is contact page');
// })


// app.get('/',(req,res)=>{
//     res.send('home page')
// })

// app.post('/product',(req,res)=>{
//     res.send(' product post');
// })

// ///aboutpage
// app.put('/product',(req,res)=>{
//     res.send(' product updaate');
// })

// // contact
// app.delete('/product',(req,res)=>{
//     res.send(' product delete');
// })







// ///file

// app.get('/',(req,res)=>{
//     // res.sendFile('./index.html')
//     res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'about.html'))
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'contact.html'))
// })
// app.get('/product',(req,res)=>{
//     res.sendFile(path.join(__dirname,'product.html'))
// })





// //static file

app.use(express.static('public'))



// //shortest way to handle the multiple routing
// app.get('/product/:category',(req,res)=>{
//     // res.send(req.params.category)
//     const {category}=req.params
//     if(category==='laptop'){
//         res.send('laptops page')
//     }
//     else if(category==='watches'){
//         res.send('watch pages')
//     }
//     else{
//         res.send('other products')
//     }
// })










// app.use(express.static('public'))



// //shortest way to handle the multiple routing
// app.get('/product/:category',(req,res)=>{
//     // res.send(req.params.category)
//     const {category}=req.params
//     if(category==='laptop'){
//         res.send('laptops page')
//     }
//     else if(category==='watches'){
//         res.send('watch pages')
//     }
//     else{
//         res.send('other products')
//     }
// })
// app.get('/product/:category',(req,res)=>{
//     const {category}=req.params
//     // res.send(req.params)
//     if(category==='laptop'){
//         res.send('laptop page')
//     }
//     else if(category==='mobile'){
//         res.send('this is mobile page')
//     }
//     else{
//         res.send('other items')
//     }
// })



// app.get('/product/:category/:brand',(req,res)=>{
//     // res.send(req.params.category)
//     const {category}=req.params
//     const {brand}=req.params
     
//     res.send(`product :${category}, brand:${brand}`)
// })


// app.get('/flight/:from-:to',(req,res)=>{
    
     
//     res.send(`flight from  :${req.params.from}, to :${req.params.to}`)
// })










app.listen(PORT,()=>{
    console.log('running');
})