const navbar = document.querySelector(".navbar");
let navbarItems = document.querySelectorAll(".navbar__item");
const dropdowns = document.querySelectorAll('.navbar__dropdown');
const mobileArrows = document.querySelectorAll(".navbar__arrow-dark");
const DesktopArrows = document.querySelectorAll(".navbar__arrow");
const navbarButton = document.querySelector(".mobile-nav__hamb");
const keepIndexes = [0, 2, 4];
const filteredNavbarItems = Array.from(navbarItems).filter((item, index) => keepIndexes.includes(index));

/*
Array.from(navbarItems).filter((item, index) => keepIndexes.includes(index)) kod parçası, 
dizideki her öğeyi (item) ve öğenin indeksini (index) alır. 
Ardından, keepIndexes dizisindeki indekslerin (index) bulunduğu öğeleri korumak için filter işlemini kullanır. 
Yani, yalnızca keepIndexes dizisinde belirtilen indekslere sahip öğeler yeni bir dizi olan filteredNavbarItems 
içinde saklanır.
*/
const arrows = Array.from(mobileArrows);
const darrows = Array.from(DesktopArrows);
console.log(darrows);

let isSmallScreen = window.innerWidth <= 752;

filteredNavbarItems.forEach(function (item, index) {
    item.addEventListener("mouseenter", () => {
        if (!isSmallScreen) {
            dropdowns[index].style.display = "flex";
        }
    });
    item.addEventListener("mouseleave", () => {
        if (!isSmallScreen) {
            dropdowns[index].style.display = "none";
        }
    });

    item.addEventListener("click", () => {
        arrows[index].classList.toggle("rotate");
        if (isSmallScreen) {
            if (dropdowns[index].style.display === "flex") {
                dropdowns[index].style.display = "none";
            } else {
                dropdowns[index].style.display = "flex";
            }
        }
    });
});


function addDropdownListeners(item, index) {
    item.addEventListener("mouseenter", () => {
        if (!isSmallScreen) {
            dropdowns[index].style.display = "flex";
            darrows[index].classList.toggle("rotate");
        }
    });

    item.addEventListener("mouseleave", () => {
        if (!isSmallScreen) {
            dropdowns[index].style.display = "none";
            darrows[index].classList.toggle("rotate");
        }
    });
}

filteredNavbarItems.forEach(addDropdownListeners);
dropdowns.forEach(addDropdownListeners);



window.addEventListener("resize", () => {
    isSmallScreen = window.innerWidth <= 752;
    hideDropdowns();
    arrows.forEach((arrow) => {
        arrow.classList.remove("rotate");
    })
    if (isSmallScreen) {
        navbar.classList.add("hidden");
    }
    else if (!isSmallScreen) {
        navbar.classList.remove("hidden");
    }
});

window.addEventListener("load", () => {
    hideDropdowns();
    if (isSmallScreen) {
        navbar.classList.add("hidden");
    }
    else if (!isSmallScreen) {
        navbar.classList.remove("hidden");
    }
});

function hideDropdowns() {
    if (isSmallScreen) {
        dropdowns.forEach((menu) => {
            menu.style.display = "none";
        });
    }
}

navbarButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("nav-translate");
});







