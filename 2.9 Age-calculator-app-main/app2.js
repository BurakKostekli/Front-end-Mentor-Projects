/** @format */

let birthDay = document.getElementById('day')
let birthMonth = document.getElementById('month')
let birthYear = document.getElementById('year')
let submitBtn = document.getElementById('submit')
let currentDate = new Date()
let currentDay = currentDate.getDate()
let currentMonth = 1 + currentDate.getMonth()
let currentYear = currentDate.getFullYear()
let dayResult = document.getElementById('dayResult')
let monthResult = document.getElementById('monthResult')
let yearResult = document.getElementById('yearResult')
var submit = document.getElementById('submit')
var errorBox = document.createElement('div')
errorBox.className = 'errorBox'
var monthNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
submit.addEventListener('click', (e) => {
    e.preventDefault()
    validateInput()
})

function calculateAge() {
    if (birthDay.value > currentDay) {
        currentDay = currentDay + monthNum[currentMonth - 1]
        currentMonth = currentMonth - 1
    }
    if (birthMonth.value > currentMonth) {
        currentMonth = currentMonth + 12
        currentYear = currentYear - 1
    }
    var day, month, year
    day = currentDay - birthDay.value
    month = currentMonth - birthMonth.value
    year = currentYear - birthYear.value
    dayResult.innerHTML = day
    monthResult.innerHTML = month
    yearResult.innerHTML = year
}
document.getElementById('reload').addEventListener('click', () => {
    window.location.reload()
})
function validateInput() {
    if (birthDay.value == '' || birthDay.value > 31) {
        errorBox.innerHTML = 'input is empty or higher than 31'
        birthDay.parentElement.append(errorBox)
    } else if (birthMonth.value.includes(0)) {
        errorBox.innerHTML = 'do not use the prefix "0"'
        birthMonth.parentElement.append(errorBox)
    } else if (
        (monthNum[birthMonth.value - 1] == 30 && birthDay.value > 30) ||
        (monthNum[birthMonth.value - 1] == 28 && birthDay.value > 28)
    ) {
        errorBox.innerHTML = 'Date higher than month days'
        birthDay.parentElement.append(errorBox)
    } else if (birthMonth.value == '' || birthMonth.value > 12) {
        errorBox.innerHTML = 'input is empty or higher than 12'
        birthMonth.parentElement.append(errorBox)
    } else if (birthYear.value == '' || birthYear.value > currentYear) {
        errorBox.innerHTML = ' input is empty or higher than current year'
        birthYear.parentElement.append(errorBox)
    } else if (birthYear.value.length < 4) {
        errorBox.innerHTML = 'Year should be written in  full ex. 1889'
        birthYear.parentElement.append(errorBox)
    } else {
        calculateAge()
    }
}