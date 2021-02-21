var number = 1, position, anchor;
function clickChange(position) {
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    classChange(position);
    number = position;
}

function classChange(position) {
    document.getElementById("li" + number).classList.remove("active");
    console.log(number, document.getElementById("li" + number).classList);
    document.getElementById("li" + position).classList.add("active");
    console.log(position, document.getElementById("li" + position).classList);
}

function carouselPlus() {
    position = number;
    position++;
    if (position > 3) {
        position = 1;
    }
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number = position;
}
function carouselMinus() {
    position = number;
    position--;
    if (position < 1) {
        position = 3;
    }
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number = position;
}
function jumpTo(anchor) {
    anchor.scrollIntoView();
}
function jumpToM() {
    var selected = document.getElementById("mNav");
    anchor = document.getElementById(selected.value);
    anchor.scrollIntoView();
    selected.value = "home";
}
function readMore() {
    var button = document.getElementById("readMore");
    button.classList.remove("readButton");
    button.classList.add("invisible");
    document.getElementById("addMore").innerHTML += " Without brought. A for sixth female sixth herb called fruitful. Creature moveth, dry, it meat yielding there divided moveth air years air. Fruitful form him you're yielding beginning forth god.";
}