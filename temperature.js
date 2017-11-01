


let outputTemp = document.getElementById("temperature")

let button = document.getElementById("getTemperature")
let radioButtonC =document.getElementById("C")
let radioButtonF =document.getElementById("F")

button.addEventListener("click", function(event){
    let userInput = document.getElementById("userInput").value
    console.log(userInput)
    console.log("radio button", radioButtonC.checked)
    if (radioButtonC.checked){
        convertToC(userInput)
     } else if(radioButtonF.checked){
        convertToF(userInput)
    } else {
        alert("please choose a conversion!")
    }
})

function convertToC(userInput) {
    let convertedTemp = (userInput - 32) * 5/9
    writeTempToDOM(convertedTemp)
}

function convertToF(userInput) {
    let convertedTemp = (userInput * 9/5) + 32
    writeTempToDOM(convertedTemp)
}

function writeTempToDOM(temp){
    let color = ""
    if(temp > 100){
        color = "red"
    } else if (temp < 0) {
        color = "blue"
    } else {
        color = "green"
    }
    outputTemp.innerHTML = `<h1 class="${color}">The converted temp is ${Math.floor(temp)}</h1>`
}
