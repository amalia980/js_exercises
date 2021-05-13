const biketype = document.getElementById("bike");
const clickbutton6 = document.getElementById("button6");

function whenClicked() {
    const biketype = {type: "Honda", color: "Purple", Model: "2006"};
    document.getElementById("bike").innerHTML = biketype.Model;
}

clickbutton6.addEventListener("click", whenClicked);