// NAVBAR DROPDOWNS
const featureButton = document.getElementById("itemFeature");
const companyButton = document.getElementById("itemCompany");
const features = document.getElementById("features");
const company = document.getElementById("company");
// Arrows
const arrowsFeature = document.querySelectorAll(".farrow");
const arrowsCompany = document.querySelectorAll(".sarrow");
// Buttons
const buttonBox = document.querySelector(".menu");
const buttons = document.querySelectorAll(".menu__button");
//Navbar
const navbar = document.querySelector(".navbar");



//NAVBAR

featureButton.addEventListener("click", () => {
    features.classList.toggle("hidden");
    arrowsFeature.forEach((arrow) => {
        arrow.classList.toggle("hidden");
    });
});

companyButton.addEventListener("click", () => {
    company.classList.toggle("hidden");
    arrowsCompany.forEach((arrow) => {
        arrow.classList.toggle("hidden");
    });
});


// MENU BUTTON
buttonBox.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.classList.toggle("hidden");
    });
    navbar.classList.toggle("transform");
})



