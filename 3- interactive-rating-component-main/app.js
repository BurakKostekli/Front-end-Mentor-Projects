const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const myForm = document.getElementById("myForm");
const buttons = document.querySelectorAll(".numberButton");
const point = document.getElementById("point");
const alertContainer = document.getElementById("alertContainer");

let score = 0;

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        buttons.forEach((button) => {
            button.classList.remove("colorGray");
        });
        button.classList.add("colorGray");
        score = Number(button.value)
        console.log(score);
    })
});

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (score != 0) {
        firstBox.classList.add("deactive");
        secondBox.classList.remove("deactive");
        point.innerText = score;
    }
    else {
        alertContainer.classList.remove("alertActive");

        setTimeout(() => {
            alertContainer.classList.add("alertActive");
        }, 2000)
    }

})
