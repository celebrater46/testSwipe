"use strict";

const div = document.getElementById("box");
let startX = null;
let endX = null;

const logSwipeStart = (e) => {
    e.preventDefault();
    startX = e.touches[0].pageX;
}

function logSwipe(e) {
    e.preventDefault();
    endX = e.touches[0].pageX;
}

function logSwipeEnd(e) {
    e.preventDefault();
    if(endX - startX > 0) {
        console.log("Swiped to right.");
    } else {
        console.log("Swiped to left");
    }
}

window.addEventListener('load', () => {
    div.addEventListener('touchmove', logSwipe);
    div.addEventListener('touchstart', logSwipeStart);
    div.addEventListener('touchend', logSwipeEnd);
});