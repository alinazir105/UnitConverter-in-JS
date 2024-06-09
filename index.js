const convertBtn = document.getElementById("convert-btn")

const conversion1 = document.getElementById("conversion1")
const conversion2 = document.getElementById("conversion2")
const conversion3 = document.getElementById("conversion3")

convertBtn.addEventListener("click", function(){
    const inputVal = document.getElementById("numInput").value
    let feet = inputVal * 3.281
    let meters = inputVal / 3.281 
    conversion1.innerText = `${inputVal} meters = ${feet.toFixed(3)} feet | ${inputVal} feet = ${meters.toFixed(3)} meters`
})

convertBtn.addEventListener("click", function(){
    const inputVal = document.getElementById("numInput").value
    let gallons = inputVal * 0.264
    let liters = inputVal / 0.264 
    conversion2.innerText = `${inputVal} liters = ${gallons.toFixed(3)} gallons | ${inputVal} gallons = ${liters.toFixed(3)} liters`
})

convertBtn.addEventListener("click", function(){
    const inputVal = document.getElementById("numInput").value
    let pounds = inputVal * 2.204
    let kilos = inputVal / 2.204 
    conversion3.innerText = `${inputVal} kilos = ${pounds.toFixed(3)} pounds | ${inputVal} pounds = ${kilos.toFixed(3)} kilos`
})