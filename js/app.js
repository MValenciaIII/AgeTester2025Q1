//?

//? My check Age button HTML
let checkButton = document.getElementById("checkAge");
console.log(checkButton)
let displayResult = document.querySelector(".displayResultCol h3")
console.log(displayResult);

checkButton.addEventListener("click", () => {
    let ageInput = document.getElementById("ageInput");
    console.log(ageInput.value)
    
    if (ageInput.value >= 18) {
        displayResult.innerText = "Come on in, You're old enough."
    } else if (ageInput.value < 18 ) {
        displayResult.innerText = "Get out here!"
    }
})
