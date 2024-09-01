const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/delete-quiz', (req, res) => {
    const quizId = req.body.quizId;
    // Perform deletion logic (e.g., remove from database)
    console.log(`Quiz with ID ${quizId} deleted`);

    // Respond with success or failure
    res.status(200).send({ message: 'Quiz deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
