const inputfield2 = document.getElementById("input2");
const clickbutton2 = document.getElementById("button2");

// part 2

function whenClicked() {
    const userInput2 = parseInt(inputfield2.value);

    if (userInput2 == 1) {
        alert("Correct answer!");
    } else {
        alert("Sorry mate, try again");
    }
}

clickbutton2.addEventListener("click", whenClicked);