'use strict'

const hamburgerMenu = document.getElementById("hamburger-trigger")

hamburgerMenu.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active")
    e.currentTarget.parentNode.classList.toggle("active")
    document.querySelector(".mask").classList.toggle("active")
    document.querySelector(".h-nav-area").classList.toggle("active")
})