const questionBoxs = document.querySelectorAll(".questionBox");
const arrows = document.querySelectorAll(".arrow");

questionBoxs.forEach((questionBox) => {

    questionBox.addEventListener("click", (a) => {

        if (questionBox.classList.contains("active")) {
            questionBox.classList.remove("active");
            arr = arrowFound(questionBox);
            arr.classList.remove("none");
        }
        else {
            questionBoxs.forEach((e) => {
                e.classList.remove("active");
            });
            questionBox.classList.add("active");
            arr = arrowFound(questionBox);
            arr.classList.add("none");

        }
    })
})

function arrowFound(questionBox) {
    arrows.forEach((arrow) => {
        arrow.classList.remove("none");
    })
    return questionBox.querySelector(".arrow");
}