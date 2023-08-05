const form = document.getElementById("form");
const input = document.getElementById("input");

const container = document.getElementById("container");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    container.classList.add("hidden");
    success.classList.remove("hidden");
})