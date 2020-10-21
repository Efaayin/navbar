let hamburger = document.querySelector('.hamburger-img');
let smallScreen = document.querySelector('.container__smaller-screen');
let smallHamburger = document.querySelector('.small-hamburger-img');

function displayFxn() {
    smallScreen.style.display = "block";
}

function hideFxn() {
    smallScreen.style.display = "none";
}

hamburger.addEventListener('click', displayFxn)
smallHamburger.addEventListener('click', hideFxn)