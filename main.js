'use strict';


//VARIABLES
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;


//FUNCTIONS

function handleMouseDown(ev) {
    isDown = true;
    slider.classList.add('active');
    //Find out where we have clicked, taking into account the element's offset in relation to the viewport position
    startX = ev.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function handleMouseLeave() {
    isDown = false;
    slider.classList.remove('active');
}

function handleMouseUp() {
    isDown = false;
    slider.classList.remove('active');
}

function handleMouseMove(ev) {
    console.log('entra')
    if(!isDown) return; //stop the fn from running
    //Prevent the browser from selecting whatever it is inside the element
    ev.preventDefault();
    const x = ev.pageX - slider.offsetLeft;
    //How far we have deviated from the initial position
    const walk = (x - startX) * 3;
    //Change the scroll left property depending on the distance
    slider.scrollLeft = scrollLeft - walk;
}


//EVENT LISTENERS
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mouseup', handleMouseUp);
slider.addEventListener('mousemove', handleMouseMove);
