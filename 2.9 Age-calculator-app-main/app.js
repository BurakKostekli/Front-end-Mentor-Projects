// Output Elements
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");

const button = document.getElementById("button");

// Input Elements
const dayInput = document.getElementById("input_day");
const monthInput = document.getElementById("input_month");
const yearInput = document.getElementById("input_year");

// Error Elements
const dayError = document.getElementById("errorDay");
const monthError = document.getElementById("errorMonth");
const yearError = document.getElementById("errorYear");

// Form Element
const form = document.getElementById("form");


form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validate() {
    const inputs = document.querySelectorAll(".inputt");
    let validator = true;

    inputs.forEach((i) => {

        if (!i.value) {
            i.classList.add("red-border");
            i.previousElementSibling.classList.add("red-color");
            i.nextElementSibling.textContent = "this field is required";
            validator = false;
        }
        else if (monthInput.value > 12 || monthInput.value < 0) {
            monthInput.classList.add("red-border");
            monthInput.previousElementSibling.classList.add("red-color");
            monthInput.nextElementSibling.textContent = "Must be a valid month";
            validator = false;
        }
        else if (dayInput.value > 31 || dayInput.value < 0) {
            dayInput.classList.add("red-border");
            dayInput.previousElementSibling.classList.add("red-color");
            dayInput.nextElementSibling.textContent = "Must be a valid day";
            validator = false;
        }
        else if (yearInput.value > Number(new Date().toISOString().split("T")[0].split("-")[0])) {
            yearInput.classList.add("red-border");
            yearInput.previousElementSibling.classList.add("red-color");
            yearInput.nextElementSibling.textContent = "Must be in the past";
            validator = false;
        }
        else {
            i.classList.remove("red-border");
            i.previousElementSibling.classList.remove("red-color");
            i.nextElementSibling.textContent = "";
            validator = true;
        }
    })
    return validator;
};


function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
        if (dayInput.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthInput.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayInput.value;
        const m = month - monthInput.value;
        const y = year - yearInput.value;

        dayElement.innerHTML = d;
        monthElement.innerHTML = m;
        yearElement.innerHTML = y;
    }
}




