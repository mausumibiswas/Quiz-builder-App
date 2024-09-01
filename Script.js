document.getElementById('sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let valid = true;

    // Validate name
    if (name === "") {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validate password strength
    if (password.length < 6) {
        document.getElementById('password-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('confirm-password-error').style.display = 'none';
    }

    // If form is valid, proceed with submission
    if (valid) {
        // Submit form data to the server or proceed with further processing
        console.log('Form is valid');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
