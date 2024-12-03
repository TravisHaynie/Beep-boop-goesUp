let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let periodEl = document.getElementById("period")
let foulEl = document.getElementById("fouls")
let timerEl = document.getElementById("timer")
let buttonEl = document.querySelectorAll(".btn")
let countHome = 0
let countGuest = 0
let countPeriod = 0
let countFouls = 0
let timeEl = 0

function plusonehome() {

    countHome += 1
    homeEl.textContent = countHome
    console.log(countHome)

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Homes in the leader"
    } else {
        console.log("tie")
    }
}


function plusoneguest() {
    countGuest += 1
    guestEl.textContent = countGuest

    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red";
        buttonEl.disablled
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the leader"
    } else {
        console.log("tie")
    }

}

function plustwohome() {
    countHome += 2
    homeEl.textContent = countHome

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Homes in the leader"
    } else {
        console.log("tie")
    }

}

function plustwoguest() {
    countGuest += 2
    guestEl.textContent = countGuest

    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red"
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the leader"
    } else {
        console.log("tie")
    }

}

function plusthreehome() {
    countHome += 3
    homeEl.textContent = countHome

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Homes in the leader"

    } else {
        console.log("tie")
    }

}

function plusthreeguest() {
    countGuest += 3
    guestEl.textContent = countGuest


    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red"
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the leader"
    } else {
        console.log("tie")
    }

}

function gameperiod() {
    countPeriod += 1
    periodEl.textContent = countPeriod
}

function teamfouls() {
    countFouls += 1
    foulEl.textContent = countFouls
}

function newgame() {
    location.reload();
}



