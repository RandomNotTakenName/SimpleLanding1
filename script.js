var number=1, position, anchor;
function clickChange(position) {
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
}

function carouselPlus() {
    position=number;
    position++;
    if (position > 3) {
        position = 1;
    }
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
    console.log(position);
}
function carouselMinus() {
    position=number;
    position--;
    if (position < 1) {
        position = 3;
    }
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
    console.log(position);
}
function jumpTo(anchor) {
    console.log(anchor);
    anchor.scrollIntoView();
}
function lol() {
    document.getElementById("readMore").innerHTML = "Nice try:)";
}