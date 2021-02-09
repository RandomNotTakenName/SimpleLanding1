var number=1, position, anchor;
function clickChange(position) {
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    classChange(position);
    number=position;
}

function classChange(position) {
    document.getElementById("li" + number).classList.remove("active");
    console.log(number, document.getElementById("li" + number).classList);
    document.getElementById("li" + position).classList.add("active");
    console.log(position, document.getElementById("li" + position).classList);
}

function carouselPlus() {
    position=number;
    position++;
    if (position > 3) {
        position = 1;
    }    
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
}
function carouselMinus() {
    position=number;
    position--;
    if (position < 1) {
        position = 3;
    }
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
}
function jumpTo(anchor) {
    anchor.scrollIntoView();
}
function lol() {
    document.getElementById("readMore").innerHTML = "Nice try:)";
}