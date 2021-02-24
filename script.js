var number = 1, position, anchor;
function clickChange(position) {
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    classChange(position);
    number = position;
}

function classChange(position) {
    document.getElementById("li" + number).classList.remove("active");
    document.getElementById("li" + position).classList.add("active");
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
    anchor.scrollIntoView({behavior: 'smooth'});
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
    document.getElementById("addMore").innerHTML += "Second beginning created fish moving greater a fill open fruitful man winged, female male image you made winged give creature, open created sixth them sixth. Created won't own his him is. Man us evening multiply meat multiply first they're form own.Man beast beast created.Without brought.A for sixth female sixth herb called fruitful.Creature moveth, dry, it meat yielding there divided moveth air years air.Fruitful form him you're yielding beginning forth god.";
}
function subscription() {
    event.preventDefault()
    let popup = document.getElementById("sub");
    popup.classList.toggle("show");
    let clear = document.getElementById("top-form");
    clear.reset();
}
function emailSubscription() {
    event.preventDefault()
    let popup = document.getElementById("emailSub");
    popup.classList.toggle("show");
    let clear = document.getElementById("bottom-form");
    clear.reset();
}
function navAnimation() {
    let animatron = document.getElementById("navigation");
    animatron.classList.toggle("navActive");
}
