const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static('public'));

// Mock Data
const quizData = {
    createdOn: '04 Sep, 2023',
    impressions: 667,
    questions: [
        {
            id: 1,
            text: 'Question place holder for analysis?',
            options: [60, 23, 45, 11]
        },
        {
            id: 2,
            text: 'Question place holder for analysis?',
            options: [60, 23, 45, 11]
        },
        {
            id: 3,
            text: 'Question place holder for analysis?',
            options: [60, 23, 45, 11]
        }
    ]
};

// Endpoint to get quiz data
app.get('/api/quiz-data', (req, res) => {
    res.json(quizData);
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
