const button = document.getElementById("button");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
    menu.classList.toggle("down");
});

window.addEventListener("resize", checkScreenWidth);

function checkScreenWidth() {
    if (window.innerWidth > 725) {
        menu.classList.remove("down");
    }
}
