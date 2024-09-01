const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit-answer', (req, res) => {
    const answer = req.body.answer;
    console.log(`Submitted answer: ${answer}`);
    
    // Perform answer validation and save logic here
    
    res.status(200).send({ message: 'Answer submitted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
