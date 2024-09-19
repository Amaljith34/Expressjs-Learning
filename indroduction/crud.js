// import express from 'express'
// const app = express();
// const PORT = 3000;

// app.use(express.json()); // Middleware to parse JSON request bodies

// let users = []; // In-memory array to store users

// // CREATE: Add a new user
// app.post('/users', (req, res) => {
//     const user = {
//         id: users.length + 1, 
//         name: req.body.name,
//         email: req.body.email
//     };
//     users.push(user);
//     res.status(201).send(user);
// });

// // READ: Get all users
// app.get('/users', (req, res) => {
//     res.status(200).json(users);
// });

// // READ: Get a user by ID
// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('User not found');
//     res.status(200).json(user);
// });

// // UPDATE: Update a user's information
// app.put('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('User not found');

//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     res.status(200).send(user);
// });

// // DELETE: Remove a user by ID
// app.delete('/users/:id', (req, res) => {
//     const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
//     if (userIndex === -1) return res.status(404).send('User not found');

//     users.splice(userIndex, 1); // Remove the user from the array
//     res.status(204).send();
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// import express from 'express';
// const app=express();
// import mongoose from 'mongoose';

// const userSchema=new mongoose.Schema({
//     name:String,
//     age:Number
// })


// const User=mongoose.model('User',userSchema)

// app.use(express.json())
// app.get('/users', async (req,res)=>{
//     try{
//         const users= await User.find();
//         res.status(200).json(users)
//     }catch(err){
//         res.status(400).send(err.message)
//     }
// })

// app.post('/users', async (req,res)=>{
//     try {
//         const {name,age}=req.body
//         const user=new User({name,age})
//         await user.save()
//         res.status(201).send(user)
//     } catch (error) {
//         res.status(400).send(err.message)
//     }
// })


// app.delete('users/:id', async (req,res)=>{
//     try {
//         const userid=req.params.id;
//         const todelete=req.body;
//         const deleted= await User.findByIdAndDelete(userid)
//         if(!deleted)return res.status(404).json({error:'404 not found'})
//             res.status(202).json({message:'user deleted'})
//     } catch (error) {
//         console.log(err);
        
//     }
// })



// app.listen(3002,()=>{
//     console.log('ruuning');
    
// })


// import express from 'express'
// const app=express()


// app.get('/',(req,res)=>{
//     res.send('this is user')
// })
// app.post('/',(req,res)=>{
//     res.send('this is post')
// })
// app.put('/',(req,res)=>{
//     res.send('this is put')
// })
// app.delete('/',(req,res)=>{
//     res.send('this is delete')
// })

// app.listen(4200,()=>{
//     console.log('run');
// })