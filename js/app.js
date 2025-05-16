//?

//? My check Age button HTML
let checkButton = document.getElementById("checkAge");
console.log(checkButton)
let displayResult = document.querySelector(".displayResultCol h3")
console.log(displayResult);

checkButton.addEventListener("click", () => {
    //? Grabbing ageInput Element Node info
    let ageInput = document.getElementById("ageInput")
    console.log(ageInput.value)

    //? Changes inputDate to an actual Date Value
    const inputDate = new Date(ageInput.value);

    //! Month Number is on a Zero-Based index
    console.log(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());

    //? Gets current date and we can use this to compare.
    const currentDate = new Date();
    console.log(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    let yearCheck = currentDate.getFullYear() - inputDate.getFullYear();
    console.log("This person is", yearCheck, "years old.");

    if(yearCheck >= 18) {
        if(inputDate.getMonth() <= currentDate.getMonth()) {
            if(inputDate.getDate() < currentDate.getDate()) {
                console.log("You're allowed")
            } else {
                console.log("Just shy of a couple of days, Sorry man.")
            }
        } else {
            console.log("Not quite there yet, come back a couple months later :)")
        }
    } else {
        console.log("Leave my website.")
    }

})
