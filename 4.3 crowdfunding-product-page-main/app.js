const menuButton = document.getElementById('menuButton');
const menuButtonImages = document.querySelectorAll('.btn-image');

const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');

const navList = document.getElementById('navList');

const bookmarkButton = document.querySelector('.first__bookmark');
const bookmarkText = document.getElementById('bookmarkText');
const bookmarkImg = document.getElementById('bookmarkImg');

const buttons = document.querySelectorAll('.select');

const popup = document.getElementById('popup');
const popupClose = document.querySelector('.popup__img');

const popupBoxes = document.querySelectorAll('.popup__box');
const popupChecks = document.querySelectorAll('.popup__check');

const continueButtons = document.querySelectorAll('.continue-btn');
const thanksBox = document.querySelector('.thanks');
const thanksButton = document.querySelector('.complete');


let selectedIndex = 0;

// NAVBAR //////////////////////////////////////////////////////////////////

let isNavOpen = 0;

// Navbar menu btn
function toggleMenu() {
    // btn image change
    menuButtonImages.forEach((img) => {
        img.classList.toggle('dp-none');
    });

    // overlay active
    overlay.classList.toggle('dp-none');

    // navList transform
    const translateYValue = isNavOpen === 0 ? '0%' : '-150%';
    navList.style.transform = `translateX(-50%) translateY(${translateYValue})`;

    // toggle isNavOpen
    isNavOpen = isNavOpen === 0 ? 1 : 0;
}

menuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);



// Device width navbar reset
window.addEventListener('resize', function() {
    // overlay reset
    overlay.classList.add('dp-none');

    const computedStyle = this.window.getComputedStyle(navList);

    if (window.innerWidth > 600) {
        navList.style.transform = 'translateX(0%) translateY(0%)';
        isNavOpen = 1;
        
    } else if (this.window.innerWidth <= 600) {
        navList.style.transform = 'translateX(-50%) translateY(-150%)';
        isNavOpen = 0; 

        // navbar button image reset
        var elements = [...menuButtonImages];
        elements[0].classList.remove('dp-none');
        elements[1].classList.add('dp-none');

    }
    
    if (computedStyle.getPropertyValue('position') === 'absolute') {
        navList.style.transform = 'translateX(-50%) translateY(-150%)';
        isNavOpen = 0; 
    }
});
window.dispatchEvent(new Event('resize')); // page reload trigger





// PAGE ///////////////////////////////////////////////////////////////////

bookmarkButton.addEventListener('click', ()=> {
    bookmarkButton.classList.toggle('bookmarked');
    bookmarkText.textContent = bookmarkText.textContent === 'Bookmark' ? 'Bookmarked' : 'Bookmark';

    bookmarkImg.src = bookmarkImg.src === 'http://127.0.0.1:8080/images/icon-bookmark.svg' ? 'http://127.0.0.1:8080/images/icon-bookmark-filled.svg' : 'http://127.0.0.1:8080/images/icon-bookmark.svg';
    
})




// POPUP ///////////////////////////////////////////////////////////////////

function popupToggle() {
    popup.classList.toggle('dp-none');
    overlay2.classList.toggle('dp-none');
}

// OPEN
buttons.forEach(button => {
    button.addEventListener('click', function() {
        selectedIndex = this.id.replace('button','');

        popupToggle();

        // AUTO SELECT PREVIOUSLY
        let arr = [...popupBoxes];
        let selectedBox = arr[Number(selectedIndex)+ 1];

        const popupDown = selectedBox.querySelector('.popup__down');
        const checkElement = selectedBox.querySelector('.popup__check');

        checkElement.style.backgroundColor = 'var(--color-moderate-cyan)'; 
        selectedBox.classList.add('selected-popup');
        popupDown.classList.remove('dp-none');

        popupBoxes.forEach((box)=> {
            if (box != selectedBox) {
                const popupDown = box.querySelector('.popup__down');
                const checkElement = box.querySelector('.popup__check');

                box.classList.remove('selected-popup');
                if (checkElement) checkElement.style.backgroundColor = 'transparent';
                if (popupDown) popupDown.classList.add('dp-none');
            }
        })
    });
});

// CLOSE
popupClose.addEventListener('click', ()=> {
    popupToggle();
});

overlay2.addEventListener('click', ()=> {
    popupToggle();
});

// POPUP SELECTS
popupBoxes.forEach(function(box) {

    box.addEventListener('click', ()=> {
        const popupDown = box.querySelector('.popup__down');
        const checkElement = box.querySelector('.popup__check');

        checkElement.style.backgroundColor = 'var(--color-moderate-cyan)'; 
        box.classList.add('selected-popup');
        popupDown.classList.remove('dp-none');

        popupBoxes.forEach(newBox => {
            if (box != newBox) {
                const popupDown = newBox.querySelector('.popup__down');
                const checkElement = newBox.querySelector('.popup__check');

                newBox.classList.remove('selected-popup');
                if (checkElement) checkElement.style.backgroundColor = 'transparent';
                if (popupDown) popupDown.classList.add('dp-none');
            }
        });
    })
});




// FINAL POPUP
continueButtons.forEach((button) => {
    button.addEventListener('click', ()=> {
        popup.classList.add('dp-none');
        thanksBox.classList.remove('dp-none');
    })
});

thanksButton.addEventListener('click', ()=> {
    thanksBox.classList.add('dp-none');
    overlay2.classList.add('dp-none');
})