const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mock User Database (for demo purposes)
let users = [];

// Endpoint for sign-up
app.post('/sign-up', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Simple server-side validation
    if (!name || !email || !password || password !== confirmPassword) {
        return res.status(400).json({ error: 'Validation failed' });
    }

    // Add user to the mock database
    users.push({ name, email, password });
    res.status(200).json({ message: 'User signed up successfully!' });
});

// Serve the HTML page (if needed)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
