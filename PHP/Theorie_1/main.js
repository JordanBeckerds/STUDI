window.addEventListener("load", () => {
    document.getElementById("background").style.background = "yellow";
});

let slide;

window.addEventListener("load", () => {
    slide = 0
});

function right() {
    if (slide == 2) {
        slide = 0;
    }   else {
        slide += 1;
    }
    if (slide == 0) {
        document.getElementById("background").style.background = "yellow";
    }
    if (slide == 1) {
        document.getElementById("background").style.background = "red";
    }
    if (slide == 2) {
        document.getElementById("background").style.background = "blue";
    }
    console.log("slide =",slide)
}

function left() {
    if (slide == 0) {
        slide = 2;
    }   else {
        slide -= 1;
    }
    if (slide == 0) {
        document.getElementById("background").style.background = "yellow";
    }
    if (slide == 1) {
        document.getElementById("background").style.background = "red";
    }
    if (slide == 2) {
        document.getElementById("background").style.background = "blue";
    }
    console.log("slide =",slide)
}

console.log("slide =",slide)
