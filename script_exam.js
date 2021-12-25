function clickFigura() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var pink = getRandomInt(255);

    console.log("#clickFigura", red, green, pink, rad);

    var stringBoxShadow = "0 0 0px rgb(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 20px rgb(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 40px rgb(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 80px rgba(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 100px rgb(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + pink + ", 1)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + pink + ", 1)";

    var rad = getRandomInt(100);
    var b = getRandomInt(15);
    var w = getRandomInt(260);
    var h  = getRandomInt(260);

    document.getElementById("figura").style.backgroundColor = "rgb(" + red + ", " + green + ", " + pink + ")";
    document.getElementById("figura").style.boxShadow = stringBoxShadow;
    document.getElementById("figura").style.borderRadius = rad + "%";
    document.getElementById("figura").style.width = w + "px";
    document.getElementById("figura").style.height = h + "px";
    document.getElementById("figura").style.border = b + "px solid";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

