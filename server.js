const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Mock Quiz Database (for demo purposes)
let quizzes = [
    { id: 1, name: "Quiz 1", createdOn: "01 Sep, 2023", impressions: 345 },
    { id: 2, name: "Quiz 2", createdOn: "04 Sep, 2023", impressions: 667 },
    { id: 3, name: "Quiz 3", createdOn: "06 Sep, 2023", impressions: "1.6K" },
    { id: 4, name: "Quiz 4", createdOn: "09 Sep, 2023", impressions: 789 },
    { id: 5, name: "Quiz 5", createdOn: "11 Sep, 2023", impressions: 995 },
    { id: 6, name: "Quiz 6", createdOn: "13 Sep, 2023", impressions: "2.5K" },
    { id: 7, name: "Quiz 7", createdOn: "14 Sep, 2023", impressions: 231 },
    { id: 8, name: "Quiz 8", createdOn: "17 Sep, 2023", impressions: "1.3K" },
];

// Endpoint to get all quizzes
app.get('/api/quizzes', (req, res) => {
    res.json(quizzes);
});

// Endpoint to delete a quiz
app.delete('/api/quizzes/:id', (req, res) => {
    const quizId = parseInt(req.params.id);
    quizzes = quizzes.filter(quiz => quiz.id !== quizId);
    res.json({ message: 'Quiz deleted successfully!' });
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});