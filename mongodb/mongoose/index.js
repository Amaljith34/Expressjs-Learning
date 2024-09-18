// const express=require('express');
// const app=express()
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test')
// const db=mongoose.connection;
// db.on("error",console.error.bind(console,"connection error")
// )
// db.once("open",()=>{
//     console.log("sucess");
    
// })
// //create sheamsa
// const userShema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String,
//     password:String
// })
// //create model
// const User=mongoose.model("User",userShema)
// app.get("/create",async(req,res)=>{
//     const user=new User({
//         name:"amal",
//         age:21,
//         email:"amaljith.com",
//         password:"2345"
//     });
//    await user.save()
//    res.send(user)
// })

// app.get("/users",async(req,res)=>{
//     User.find({}).then((user)=>{
//       res.send(user)
//     })
//     .catch((err)=>{
//         res.status(500).send(err)
//     })
// })
// app.listen(3000,()=>{
//     console.log('running');
    
// })