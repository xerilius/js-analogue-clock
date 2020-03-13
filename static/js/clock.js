"use strict";


// 1
const setDate = function() {
    // Date object
    const now = new Date();
    
    // SECONDS
    const seconds = now.getSeconds();
    // turning seconds into degrees 
    // add 90 deg because of the initial offset of 90 in css
    const secondsDegrees = ((seconds/60) * 360) + 90;
    
    // 3
    const secondHand = document.querySelector('.second-hand');
    // apply style to secondHand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // MINUTES
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60) * 360) + 90;
    const minsHand = document.querySelector('.min-hand');
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    // HOURS
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
// 2
// Set timer for 1000ms
setInterval(setDate, 1000);


