const button = document.getElementById("mark");
const dots = document.querySelectorAll(".box__red-dot");
const boxes = document.querySelectorAll(".box");
const unread = document.getElementById("numberBox");

button.addEventListener("click", () => {
    dots.forEach((d) => {
        d.classList.remove("box__red-dot");
    })

    boxes.forEach((box) => {
        box.classList.add("box-read");
    })

    unread.textContent = "0";
})


