const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// In-memory storage for users
let users = [];

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST '/users' - Create a user with name, email, and username
app.post('/users', (req, res) => {
    const { name, email, username } = req.body;
    
    if (!name || !email || !username) {
        return res.status(400).json({ error: 'Name, email, and username are required.' });
    }
    
    const newUser = {
        id: users.length + 1, // Generate a new ID (in a real app, you should use a proper unique ID)
        name,
        email,
        username
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

// GET '/users' - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET '/users/:id' - Get a specific user based on the id provided
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }
    
    res.json(user);
});

// PUT '/users/:id' - Update a specific user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, username } = req.body;
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }
    
    const updatedUser = { ...users[userIndex], name, email, username };
    users[userIndex] = updatedUser;
    
    res.json(updatedUser);
});

// DELETE '/users/:id' - Delete a specific user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }
    
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

// Start the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
