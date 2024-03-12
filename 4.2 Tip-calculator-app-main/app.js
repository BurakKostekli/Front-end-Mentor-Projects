document.addEventListener('DOMContentLoaded', function () {
    const billInput = document.getElementById('bill');
    const boxes = document.querySelectorAll('.percentage__box');
    const customBox = document.getElementById('custom');
    const peopleInput = document.getElementById('people');

    const firstMoney = document.getElementById('firstMoney');
    const secondMoney = document.getElementById('secondMoney');
    const resetBtn = document.getElementById('reset');

    let billAmount = 0;
    let tipPer = '';

    // Onerilenleri kapatma
    billInput.setAttribute('autocomplete', 'off');
    customBox.setAttribute('autocomplete', 'off');
    peopleInput.setAttribute('autocomplete', 'off');

    // Box clicked
    boxes.forEach(function(box) {
        box.addEventListener('click', () => {
            tipPer = box.textContent;

            if (
                billInput.value.trim() !== '' && 
                peopleInput.value.trim() !== '' && 
                (customBox.value.trim() !== '' || tipPer !== '')
            )   {
                calculate();
            };

            boxes.forEach(function(otherBox) {
                if (otherBox !== box) {
                    otherBox.classList.remove('selected');
                }
            });

            box.classList.add('selected');
        });
    });

    // Input event
    document.addEventListener('input', (event) => {

        if (event.target === billInput) {
            let newRegex = event.target.value.replace(/[^0-9.$]/g, '').slice(0, 6);
            event.target.value = newRegex;
            billAmount = Number(billInput.value);
        }

        if (event.target === peopleInput) {
            let newRegex = event.target.value.replace(/\D/g, '').slice(0, 2);
            event.target.value = newRegex;
        }

        if (event.target === customBox) {
            boxes.forEach(box => box.classList.contains('selected') ? box.classList.remove('selected') : null);
            tipPer = customBox.value;

            let newRegex = event.target.value.replace(/[^0-9%]/g, '').slice(0, 3);
            event.target.value = newRegex;

            if (newRegex.length > 0) {
                event.target.value = newRegex.includes('%') ? newRegex : newRegex + '%';
                event.target.setSelectionRange(event.target.value.length - 1, event.target.value.length - 1);
            } else {
                event.target.value = '';
            };
        };
        
        // Calculate
        if (
            billInput.value.trim() !== '' && 
            peopleInput.value.trim() !== '' && 
            (customBox.value.trim() !== '' || tipPer !== '')
        )   {
            calculate();
        };
    });

    function calculate() {
        let bill = Number(billInput.value), people = Number(peopleInput.value);
        let per = Number(tipPer.replace(/\D/g, ''));

        // first part
        let result = (bill / per) / people;
        firstMoney.textContent = `$${result.toFixed(2)}`;

        // second part
        let result2 = result + (bill / people);
        secondMoney.textContent = `${result2.toFixed(2)}`;

        if (result == 'Infinity' || result2 == 'Infinity') {
            firstMoney.textContent = '$0.00';
            secondMoney.textContent = '$0.00';
        };
    };

    // RESET
    resetBtn.addEventListener('click', () => {
        billInput.value = '';
        peopleInput.value = '';
        customBox.value = '';
        tipPer = '';
        boxes.forEach(function(box) {
            box.classList.remove('selected');
        });
        firstMoney.textContent = '$0.00';
        secondMoney.textContent = '$0.00';
    });
});

    







