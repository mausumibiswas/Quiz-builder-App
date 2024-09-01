document.addEventListener('DOMContentLoaded', function () {
    const quizData = [
        { id: 1, name: "Quiz 1", createdOn: "01 Sep, 2023", impressions: 345 },
        { id: 2, name: "Quiz 2", createdOn: "04 Sep, 2023", impressions: 667 },
        { id: 3, name: "Quiz 3", createdOn: "06 Sep, 2023", impressions: "1.6K" },
        { id: 4, name: "Quiz 4", createdOn: "09 Sep, 2023", impressions: 789 },
        { id: 5, name: "Quiz 5", createdOn: "11 Sep, 2023", impressions: 995 },
        { id: 6, name: "Quiz 6", createdOn: "13 Sep, 2023", impressions: "2.5K" },
        { id: 7, name: "Quiz 7", createdOn: "14 Sep, 2023", impressions: 231 },
        { id: 8, name: "Quiz 8", createdOn: "17 Sep, 2023", impressions: "1.3K" },
    ];

    const tableBody = document.getElementById('quiz-table-body');

    quizData.forEach((quiz, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${quiz.name}</td>
            <td>${quiz.createdOn}</td>
            <td>${quiz.impressions}</td>
            <td class="actions">
                <span class="action-icon edit-icon">✏️</span>
                <span class="action-icon delete-icon">🗑️</span>
                <span class="action-icon share-icon">🔗</span>
            </td>
            <td><a href="#" class="question-analysis-link">Question Wise Analysis</a></td>
        `;

        tableBody.appendChild(row);
    });
});
function showDeleteDialog() {
    document.getElementById("deleteDialog").style.display = "flex";
}

function confirmDelete() {
    // Call API to delete the quiz
    fetch('/delete-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quizId: 8 })
    }).then(response => {
        if (response.ok) {
            alert('Quiz deleted successfully');
            // Reload or update the table here
        } else {
            alert('Failed to delete quiz');
        }
    }).catch(error => {
        console.error('Error:', error);
    });

    document.getElementById("deleteDialog").style.display = "none";
}

function cancelDelete() {
    document.getElementById("deleteDialog").style.display = "none";
}
