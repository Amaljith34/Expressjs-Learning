
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
    title: String,
    color: String, 
});


const MONGO_URI = 'mongodb+srv://amal:amaljith%402002@cluster0.inpmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));


const User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/about', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error " });
    }
});

app.post('/about', async (req, res) => {
    try {
        const { title, color } = req.body;
        const newUser = new User({ title, color });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error " });
    }
});

app.delete('/about/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deleted = await User.findByIdAndDelete(userId);
        if (!deleted) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(deleted);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error " });
    }
});

app.put('/notes/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sorry " });
    }
});


app.listen(3003, () => {
    console.log(' running  ');
});

