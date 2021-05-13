const inputfield4 = document.getElementById("input4");
const clickbutton4 = document.getElementById("button4");

// part 4

function whenClicked() {
    const userInput4 = parseInt(inputfield4.value);

    if (userInput4 < 10) {
        alert("Correct answer!");
    } else {
        alert("Sorry mate, try again");
    }
}

clickbutton4.addEventListener("click", whenClicked);