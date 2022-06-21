// 'use strict';

const par = document.querySelector('p');
const input = document.querySelector('input');

function debounce(func, time) {
    return function () {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && this.lastCall - previousCall <= time) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => func(), time);
    };
}

let printFunc = () => {
    par.textContent = input.value;
};

let debouncedPrint = debounce(printFunc, 300);

input.addEventListener('input', () => {
    debouncedPrint();
});
