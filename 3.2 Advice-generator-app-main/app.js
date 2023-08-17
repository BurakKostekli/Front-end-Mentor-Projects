window.addEventListener("DOMContentLoaded", FetchData); // sayfa yüklendiğinde veri çekme

const adNum = document.getElementById("adNum");
const advice = document.getElementById("advice");
const button = document.getElementById("button");

async function FetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json);

    adNum.innerText = `Advice #${json.slip.id}`;
    advice.innerText = `"${json.slip.advice}"`;
}

button.addEventListener("click", FetchData);