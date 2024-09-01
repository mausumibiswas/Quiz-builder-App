document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('quizForm').reset();
});

document.getElementById('addOption').addEventListener('click', function() {
    const optionsContainer = document.getElementById('optionsContainer');
    const optionCount = optionsContainer.querySelectorAll('.option-group').length + 1;
    
    if (optionCount <= 5) {
        const newOption = document.createElement('div');
        newOption.className = 'option-group';
        newOption.innerHTML = `
            <input type="text" name="option${optionCount}" placeholder="Text">
            <button type="button" class="delete-option">🗑️</button>
        `;
        optionsContainer.appendChild(newOption);

        newOption.querySelector('.delete-option').addEventListener('click', function() {
            newOption.remove();
        });
    } else {
        alert('Maximum 5 options allowed.');
    }
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pollQuestion = document.getElementById('pollQuestion').value;
    const optionType = document.querySelector('input[name="optionType"]:checked').value;
    const timer = document.querySelector('input[name="timer"]:checked').value;

    const options = Array.from(document.querySelectorAll('#optionsContainer .option-group input[type="text"]'))
        .map(input => input.value);

    const quizData = {
        pollQuestion,
        optionType,
        options,
        timer
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
