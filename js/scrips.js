let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let countHome = 0
let countGuest = 0

function plusonehome() {
    countHome += 1
    homeEl.textContent = countHome
    console.log(homeEl);
}

function plusoneguest() {
    countGuest += 1
    guestEl.textContent = countGuest
    console.log(homeEl);
}

function plustwohome() {
    countHome += 2
    homeEl.textContent = countHome
    console.log(homeEl)
    console.log(countHome)
}

function plustwoguest() {
    countGuest += 2
    guestEl.textContent = countGuest
    console.log(homeEl);
}

function plusthreehome() {
    countHome += 3
    homeEl.textContent = countHome
    console.log(homeEl)
    console.log(countHome)
}



function plusthreeguest() {
    countGuest += 3
    guestEl.textContent = countGuest
    console.log(homeEl);
}



