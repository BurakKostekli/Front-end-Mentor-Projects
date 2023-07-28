document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.querySelector(".email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const errorMessage = document.querySelector(".error");
        errorMessage.classList.add("none");
        input.classList.remove("red-border");

        if (input.value.trim() === "") {
            errorMessage.classList.remove("none");
            input.classList.add("red-border");
        }
        else if (!input.validity.valid) {
            errorMessage.classList.remove("none");
            input.classList.add("red-border");
        }
    })
})