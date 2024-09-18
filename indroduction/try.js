const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/submit', (req, res) => {
  const data = req.body; // Accessing data sent in the request body
  res.send(`Data received: ${JSON.stringify(data)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
