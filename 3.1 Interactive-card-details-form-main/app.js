const formContainer = document.getElementById("formContainer");
const complete = document.getElementById("complete");

const form = document.getElementById("form");


// INPUTS
const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");
const inputMonth = document.getElementById("inputMonth");
const inputYear = document.getElementById("inputYear");
const inputCvc = document.getElementById("inputCvc");

const allInputs = document.querySelectorAll(".container2__input");
const doubleInputs = document.querySelectorAll(".container2__half-input");

// ERRORS
const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

// All Errors
const allErrors = document.querySelectorAll(".container2__wrong-format");

// CARD
const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardDate = document.getElementById("cardDate");
const cardCvc = document.getElementById("cardCvc");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    // RESET ERRORS
    allErrors.forEach((error) => {
        error.classList.remove("display-error");
    });

    allInputs.forEach((input) => {
        input.classList.remove("red-border");
    });

    let hasError = false;


    // BLANK ERROR CHECK
    allInputs.forEach((input) => {
        if (input.value.trim() === '') {
            const inputError = input.nextElementSibling;
            inputError.classList.add("display-error");
            inputError.textContent = "can't be blank";
            input.classList.add("red-border");
            hasError = true;
        }
    });

    doubleInputs.forEach((input) => {
        if (input.value.trim() === '') {
            const inputError = input.parentElement.nextElementSibling;
            inputError.classList.add("display-error");
            inputError.textContent = "can't be blank";
            input.classList.add("red-border");
            hasError = true;
        }
    });


    // REGEX 
    const nameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;
    if (!nameRegex.test(inputName.value)) {
        nameError.classList.add("display-error");
        nameError.textContent = "wrong format, letters only";
        hasError = true;
        inputName.classList.add("red-border");
    }

    const numberRegex = /^(\d{4}\s?){4}$/;
    if (!numberRegex.test(inputNumber.value)) {
        numberError.classList.add("display-error");
        numberError.textContent = "Wrong format, numbers only";
        hasError = true;
        inputNumber.classList.add("red-border");
    }


    const monthRegex = /^(0?[1-9]|[1-2]\d)$/;
    const yearRegex = /^\d{2}$/;
    if (!monthRegex.test(inputMonth.value) || !yearRegex.test(inputYear.value)) {
        dateError.classList.add("display-error");
        dateError.textContent = "Wrong date";
        hasError = true;
        inputMonth.classList.add("red-border");
        inputYear.classList.add("red-border");
    }

    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(inputCvc.value)) {
        cvcError.classList.add("display-error");
        cvcError.textContent = "Wrong format";
        hasError = true;
        inputCvc.classList.add("red-border");
    }

    if (hasError === false) {
        complete.classList.remove("hidden");
        formContainer.classList.add("hidden");
    }
});




// CARD FORMAT FUNCTİON
function formatCardNumber(cardNumber) {
    const formatted = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
        formatted.push(cardNumber.substr(i, 4));
        console.log(formatted);
    }
    return formatted.join(' ');
}
/*
const formatted = [];: formatted adında boş bir diziyi tanımlıyoruz. Bu dizi, sonunda kart numarasının düzenlenmiş gruplarını içerecek.

for (let i = 0; i < cardNumber.length; i += 4) { ... }: Bu döngü, kart numarasını 4 karakterlik gruplara bölmek için kullanılır. İlk olarak i değişkenini 0'a başlatıyoruz. Daha sonra kart numarasının uzunluğu kadar dönmek üzere bir döngü oluşturuyoruz. Her adımda i değerini 4 birim artırıyoruz. Bu sayede her döngü adımında kart numarasının bir sonraki 4 karakterlik grubuna geçiyoruz.

formatted.push(cardNumber.substr(i, 4));: Döngünün her bir adımında, cardNumber adlı girdi olarak aldığımız kart numarasının, i indeksinden başlayarak 4 karakterlik bir alt dizisini (substr) alıyoruz ve bu alt diziyi formatted dizisine ekliyoruz. Yani, her döngü adımında kart numarasının 4 karakterlik bir grubunu formatted dizisine ekliyoruz.

return formatted.join(' ');: Döngü tamamlandıktan sonra, formatted dizisini join metodunu kullanarak birleştiriyoruz. Bu metod, dizideki tüm öğeleri belirtilen bir ayraç (bu durumda bir boşluk) ile birleştirir. Sonuç olarak, kart numarası 4 haneli gruplar halinde birleştirilir ve düzenlenmiş kart numarası oluşturulmuş olur.
*/



// CARD 
inputName.addEventListener("input", () => {
    const enteredName = inputName.value;
    cardName.textContent = enteredName;
});

inputNumber.addEventListener("input", () => {
    const inputValue = inputNumber.value.replace(/\s/g, ''); // boşlukları kaldırdık
    const formattedValue = formatCardNumber(inputValue); // formatladık
    inputNumber.value = formattedValue; // burada kullanıcının input kısmında da numarayı düzenliyoruz ki düzenli görsün
    cardNumber.textContent = formattedValue;
});

inputMonth.addEventListener("input", () => {
    const enteredYear = inputYear.value;
    const enteredMonth = inputMonth.value;
    cardDate.innerHTML = `${enteredMonth}/${enteredYear}`;
});

inputYear.addEventListener("input", () => {
    const enteredYear = inputYear.value;
    const enteredMonth = inputMonth.value;
    cardDate.innerHTML = `${enteredMonth}/${enteredYear}`;
});

inputCvc.addEventListener("input", () => {
    const enteredCvc = inputCvc.value;
    cardCvc.textContent = enteredCvc;
});






