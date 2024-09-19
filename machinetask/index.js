import express from 'express';
import mongoose  from 'mongoose';
import mongodb from 'mongodb'
const app=express();
app.use(express.json())


const userSchema=new mongoose.Schema({
    title:String,
    color:String, 
})

const MONGO_URI='mongodb+srv://amal:amaljith%402002@cluster0.inpmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User=mongoose.model('User',userSchema)

app.get('/',(req,res)=>{
    res.send('helo')
})
app.get('/about', async (req,res)=>{
    try {
        const users=await User.find();
        res.json(users)
        res.send('hi')
    } catch (error) {
        console.log(error);
        
    }
})
app.post('/about',async (req,res)=>{
      try {
        const {title,color}=req.body
        const newuser=new User({title,color})
        await newuser.save()
        res.status(201).json(newuser)
        
      } catch (error) {
        console.log(error);
        
      }
})

app.delete('/about/:id', async (req,res)=>{
    try {
       const userid=req.params.id
       const todelete=req.body
       const deleted=await User.findByIdAndDelete(userid)
       if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
       res.json(deleted)
    } catch (error) {
        console.log(error);
        
    }
})
// app.put('/about/:id', async(req,res)=>{
//     try {
//         const userid=req.params.id
//         const toupdate=req.body
//         const updateed=await User.findByIdAndUpdate(userid,toupdate)
//         res.json(updateed)
//     } catch (error) {
//         console.log('error')
//     }
// })

app.put('/about/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: " found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
});




app.listen(3003,()=>{
    console.log('running');
})
