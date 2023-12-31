
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const firstNameInput = document.querySelector('input[placeholder="First Name"]');
    const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
    const emailInput = document.querySelector('input[placeholder="Email Adress"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errors = document.querySelectorAll('.error');
        const exclamationMarks = document.querySelectorAll('.exclamation');
        errors.forEach(error => error.classList.add('none'));
        exclamationMarks.forEach(exclamation => exclamation.classList.add('none'));

        if (firstNameInput.value.trim() === '') {
            const firstNameError = firstNameInput.nextElementSibling.nextElementSibling;
            const firstNameExclamation = firstNameInput.nextElementSibling;
            firstNameError.classList.remove('none');
            firstNameExclamation.classList.remove('none');
        }

        if (lastNameInput.value.trim() === '') {
            const lastNameError = lastNameInput.nextElementSibling.nextElementSibling;
            const lastNameExclamation = lastNameInput.nextElementSibling;
            lastNameError.classList.remove('none');
            lastNameExclamation.classList.remove('none');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            const emailError = emailInput.nextElementSibling.nextElementSibling;
            const emailExclamation = emailInput.nextElementSibling;
            emailError.classList.remove('none');
            emailExclamation.classList.remove('none');
        }

        if (passwordInput.value.trim() === '') {
            const passwordError = passwordInput.nextElementSibling.nextElementSibling;
            const passwordExclamation = passwordInput.nextElementSibling;
            passwordError.classList.remove('none');
            passwordExclamation.classList.remove('none');
        }
    });
});

