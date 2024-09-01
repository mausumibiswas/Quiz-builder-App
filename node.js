const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/create-poll-quiz', (req, res) => {
    const { pollQuestion, optionType, options, timer } = req.body;

    // Here you would typically save this data to a database
    console.log(`Poll Question: ${pollQuestion}`);
    console.log(`Option Type: ${optionType}`);
    console.log(`Options: ${options}`);
    console.log(`Timer: ${timer} seconds`);

    res.json({ message: 'Poll quiz created successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
