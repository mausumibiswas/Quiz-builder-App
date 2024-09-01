let selectedOption = null;
let timer = 10;
let interval;

function selectOption(element) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedOption = element;
}

function submitAnswer() {
    if (selectedOption) {
        const answer = selectedOption.textContent;
        // Send the answer to the server
        fetch('/submit-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer: answer })
        }).then(response => {
            if (response.ok) {
                alert('Answer submitted successfully');
            } else {
                alert('Failed to submit answer');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please select an option');
    }
}

function startTimer() {
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById('timer').textContent = `00:${timer < 10 ? '0' + timer : timer}s`;
        } else {
            clearInterval(interval);
            submitAnswer();
        }
    }, 1000);
}

window.onload = startTimer;
