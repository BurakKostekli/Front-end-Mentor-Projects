const form = document.getElementById('myform');
const email = document.querySelector(".input");
const error = document.querySelector(".error");
const alertt = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.remove("fault")
    let emailVal = email.value;

    if (!validateEmail(emailVal)) {
        form.classList.add("fault")
    } else {
        form.classList.remove("fault")
    }
});

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

