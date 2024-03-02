document.addEventListener("DOMContentLoaded", function () {
    const questionBoxes = document.querySelectorAll(".question__box");
  
    questionBoxes.forEach((questionBox) => {
      const questionButton = questionBox.querySelector(".question__query-box");
      const questionText = questionBox.querySelector(".question__text");
      const questionAnswer = questionBox.querySelector(".question__answer");
      const questionIcon = questionBox.querySelector(".question__icon");
  
      questionButton.addEventListener("click", () => {
        questionBox.classList.toggle("clicked");
        questionAnswer.style.display =
          questionAnswer.style.display === "block" ? "none" : "block";
        questionIcon.src.includes("minus")
          ? (questionIcon.src = "/assets/images/icon-plus.svg")
          : (questionIcon.src = "/assets/images/icon-minus.svg");
  
        questionBoxes.forEach((otherQuestionBox) => {
          if (otherQuestionBox !== questionBox) {
            otherQuestionBox.classList.remove("clicked");
            otherQuestionBox.querySelector(".question__answer").style.display =
              "none";
            otherQuestionBox.querySelector(".question__icon").src =
              "/assets/images/icon-plus.svg";
          }
        });
      });
    });
  });
  