"use strict";

const div = document.getElementById("box");
let startX = null;
let endX = null;
let startY = null;
let endY = null;

const logSwipeStart = (e) => {
    e.preventDefault();
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
}

const logSwipe = (e) => {
    e.preventDefault();
    endX = e.touches[0].pageX;
    endY = e.touches[0].pageY;
}

const logSwipeEnd = (e) => {
    e.preventDefault();
    console.log("startX: " + startX);
    console.log("startY: " + startY);
    console.log("endX: " + endX);
    console.log("endY: " + endY);
    if(endX - startX > 0) {
        console.log("Swiped to right.");
    } else {
        console.log("Swiped to left");
    }
    if(endY - startY > 0) {
        console.log("Swiped to bottom");
    } else {
        console.log("Swiped to top.");
    }
}

window.addEventListener('load', () => {
    div.addEventListener('touchmove', logSwipe);
    div.addEventListener('touchstart', logSwipeStart);
    div.addEventListener('touchend', logSwipeEnd);
});