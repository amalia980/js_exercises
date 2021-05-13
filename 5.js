const inputfield5 = document.getElementById("input5");
const clickbutton5 = document.getElementById("button5");

// part 5

function whenClicked() {
    const userInput5 = parseInt(inputfield5.value);
    const fruits = ["strawberry", "banana", "mango", "pineapple"];

    document.getElementById("array").innerHTML = fruits[userInput5];

}

clickbutton5.addEventListener("click", whenClicked);