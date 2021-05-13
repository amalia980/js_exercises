//id's needed

const inputfield = document.getElementById("input");
const clickbutton = document.getElementById("button");

//part 1

function whenClicked() {
    const userInput = parseInt(inputfield.value);

    if (userInput == 10) {
        alert("Correct answer!");
    } else {
        alert("Sorry mate, try again");
    }
}

clickbutton.addEventListener("click", whenClicked);