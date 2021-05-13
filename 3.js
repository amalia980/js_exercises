const inputfield3 = document.getElementById("input3");
const clickbutton3 = document.getElementById("button3");

//part 3

function whenClicked() {
    const userInput3 = parseInt(inputfield3.value);

    if (userInput3 > 10) {
        alert("Correct answer!");
    } else {
        alert("Sorry mate, try again");
    }
}

clickbutton3.addEventListener("click", whenClicked);