let container = document.getElementById("log")
let icon = document.getElementById("icon-close")
let regLink = document.getElementById("reglink")
let logLink = document.getElementById("loglink")
let logBtn = document.getElementById("logBtn")

regLink.addEventListener("click",()=>{
    container.classList.add("active")
})
logLink.addEventListener("click",()=>{
    container.classList.remove("active")
})
logBtn.addEventListener("click",()=>{
    container.classList.remove("active-close")
})
icon.addEventListener("click",()=>{
    container.classList.add("active-close")
})