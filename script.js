'use strict';

const body = document.querySelector('body');
let active = false;
let buttonReset;
let buttonStart;
let div;
let count = 0;
let idInterval;

body.insertAdjacentHTML('beforeend',
    `<div style='height: 100px; width: 100px; background: blue; position: absolute;'></div>`);

body.insertAdjacentHTML('beforeend',
    `<button class='reset' style='  padding: 15px;background: #red ;position: fixed; top: 50%; left: 55%; transform: translate(-50%, -50%);'>Reset</button>`);

body.insertAdjacentHTML('beforeend',
    `<button class='start' style='  padding: 15px;background: #red ;position: fixed; top: 50%; left: 45%; transform: translate(-50%, -50%);'>Start/Stop</button>`);

div = document.querySelector('div');
buttonReset = document.querySelector('.reset');
buttonStart = document.querySelector('.start');

const flySquare = () => {
    count++;
    idInterval = requestAnimationFrame(flySquare);

    if (count < 100) {
        div.style.left = count * 5 + 'px';
    } else if (count < 200) {
        div.style.left = count * 5 + 'px';
    } else {
        cancelAnimationFrame(idInterval);
    }
};

buttonStart.addEventListener('click', () => {
    if (active) {
        cancelAnimationFrame(idInterval);
        active = false;
        console.log(2);
    } else {
        idInterval = requestAnimationFrame(flySquare);
        active = true;
        console.log(1);
    }
});

buttonReset.addEventListener('click', () => {
    count = 0;
    active = false;
    div.style.left = '8px';
});