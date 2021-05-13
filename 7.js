const inputfield7 = document.getElementById("input7");
const inputfield8 = document.getElementById("input8");
const clickbutton7 = document.getElementById("button7")

// part 7

function whenClicked() {
    const johnAge = parseInt(inputfield7.value);
    const sarahAge = parseInt(inputfield8.value);

    if (sarahAge > johnAge) {
        alert("Sarah is older than John");
    } else if (johnAge > sarahAge) {
        alert("John is older than Sarah");
    } else {
        alert("They are the same age!");
    }
}

clickbutton7.addEventListener("click", whenClicked);