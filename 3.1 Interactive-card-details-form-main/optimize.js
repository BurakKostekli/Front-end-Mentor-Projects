const formContainer = document.getElementById("formContainer");
const complete = document.getElementById("complete");
const form = document.getElementById("form");

// INPUTS
const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");
const inputMonth = document.getElementById("inputMonth");
const inputYear = document.getElementById("inputYear");
const inputCvc = document.getElementById("inputCvc");

// ERRORS
const allErrors = document.querySelectorAll(".container2__wrong-format");

// CARD
const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardDate = document.getElementById("cardDate");
const cardCvc = document.getElementById("cardCvc");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetErrors();
    let hasError = checkInputs();

    if (!hasError) {
        complete.classList.remove("hidden");
        formContainer.classList.add("hidden");
    }
});

function resetErrors() {
    allErrors.forEach((error) => {
        error.classList.remove("display-error");
    });

    const allInputsWithBorders = document.querySelectorAll(".container2__input.red-border");
    allInputsWithBorders.forEach((input) => {
        input.classList.remove("red-border");
    });
}

function checkInputs() {
    let hasError = false;

    const inputsToCheck = [
        { input: inputName, regex: /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/, errorElement: nameError, errorMessage: "wrong format, letters only" },
        { input: inputNumber, regex: /^(\d{4}\s?){4}$/, errorElement: numberError, errorMessage: "Wrong format, numbers only" },
        { input: inputMonth, regex: /^(0?[1-9]|[1-2]\d)$/, errorElement: dateError, errorMessage: "Wrong date" },
        { input: inputYear, regex: /^\d{2}$/, errorElement: dateError, errorMessage: "Wrong date" },
        { input: inputCvc, regex: /^\d{3}$/, errorElement: cvcError, errorMessage: "Wrong format" }
    ];

    inputsToCheck.forEach((inputObj) => {
        const inputValue = inputObj.input.value.trim();
        if (inputValue === "") {
            const inputError = inputObj.input.nextElementSibling;
            inputError.classList.add("display-error");
            inputError.textContent = "can't be blank";
            inputObj.input.classList.add("red-border");
            hasError = true;
        } else if (!inputObj.regex.test(inputValue)) {
            inputObj.errorElement.classList.add("display-error");
            inputObj.errorElement.textContent = inputObj.errorMessage;
            inputObj.input.classList.add("red-border");
            hasError = true;
        }
    });

    return hasError;
}

inputName.addEventListener("input", () => {
    const enteredName = inputName.value;
    cardName.textContent = enteredName;
});

inputNumber.addEventListener("input", () => {
    const inputValue = inputNumber.value.replace(/\s/g, '');
    const formattedValue = formatCardNumber(inputValue);
    inputNumber.value = formattedValue;
    cardNumber.textContent = formattedValue;
});

inputMonth.addEventListener("input", updateCardDate);
inputYear.addEventListener("input", updateCardDate);

inputCvc.addEventListener("input", () => {
    const enteredCvc = inputCvc.value;
    cardCvc.textContent = enteredCvc;
});

function updateCardDate() {
    const enteredYear = inputYear.value;
    const enteredMonth = inputMonth.value;
    cardDate.innerHTML = `${enteredMonth}/${enteredYear}`;
}

function formatCardNumber(cardNumber) {
    const formatted = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
        formatted.push(cardNumber.substr(i, 4));
    }
    return formatted.join(' ');
}