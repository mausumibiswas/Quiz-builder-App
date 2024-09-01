document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('quizForm').reset();
});

document.querySelectorAll('.delete-option').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pollQuestion = document.getElementById('pollQuestion').value;
    const optionType = document.querySelector('input[name="optionType"]:checked').value;

    const options = Array.from(document.querySelectorAll('#optionsContainer .option-group input[type="text"]'))
        .map(input => input.value);

    const quizData = {
        pollQuestion,
        optionType,
        options
    };

    fetch('/api/create-poll-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Poll quiz created successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
