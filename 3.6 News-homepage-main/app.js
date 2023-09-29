const navbar = document.getElementById("nav");
const button = document.getElementById("button");
const images = document.querySelectorAll(".menu");
const overlay = document.getElementById("overlay");

button.addEventListener("click", () => {
    navbar.classList.toggle("translate");

    images.forEach((image) => {
        image.classList.toggle("none");
    });

    overlay.classList.toggle("show");
})
































// let isSmallScreen = window.innerWidth <= 875;

// window.addEventListener("resize", () => {
//     isSmallScreen = window.innerWidth <= 752;
//     hideDropdowns();
//     arrows.forEach((arrow) => {
//         arrow.classList.remove("rotate");
//     })
//     if (isSmallScreen) {
//         navbar.classList.add("hidden");
//     }
//     else if (!isSmallScreen) {
//         navbar.classList.remove("hidden");
//     }
// });

// window.addEventListener("load", () => {
//     hideDropdowns();
//     if (isSmallScreen) {
//         navbar.classList.add("hidden");
//     }
//     else if (!isSmallScreen) {
//         navbar.classList.remove("hidden");
//     }
// });






