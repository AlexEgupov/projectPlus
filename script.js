'use strict';
let interval;
const timeAsks = function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const plusWords = document.getElementById('words');
    const plusZero = document.getElementById('zero');

    function taskA() {
        let daysCut = date.toLocaleString('ru', { weekday: 'long' });
        let days = daysCut[0].toUpperCase() + daysCut.substring(1).toLowerCase();
        let monthCut = date.toLocaleString('ru', { month: 'long' });
        let months = monthCut.substring(0, monthCut.length - 1) + 'я';
        //let marchAugust = monthCut.substring + 'а';

        const numWord = (value, words) => {
            const lastNum = value % 10;

            if (value > 10 & value < 20) {
                return words[2];
            }
            else if (lastNum > 1 && lastNum < 5) {
                return words[1];
            }
            else if (lastNum === 1) {
                return words[0];
            }

            return words[2];
        };

        let hoursWord = numWord(date.getHours(), ['час', 'часа', 'часов']);
        let minutesWord = numWord(date.getMinutes(), ['минута', 'минуты', 'минут']);
        let secondsWord = numWord(date.getSeconds(), ['секунда', 'секунды', 'секунд']);

        plusWords.textContent = `Сегодня ${days}, ${day} ${months} ${year} года, 
        ${hour} ${hoursWord} ${minute} ${minutesWord} ${second} ${secondsWord}`;

    }

    function zeroPlus(item) {
        let num = item < 10 ? '0' + item : item;
        return num;
    }

    function taskB() {
        plusZero.textContent = `${zeroPlus(day)}:${zeroPlus(month)}:${year} 
        ${zeroPlus(hour)}:${zeroPlus(minute)}:${zeroPlus(second)}`;

    }

    taskA();
    taskB();

};

timeAsks();
interval = setInterval(timeAsks, 500);
