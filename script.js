'use strict';

let letters = prompt('Введите больше или меньше 30 символов', 'Надо дописать еще немного');
let arr = [];

function myfunc(str) {
    if (typeof str !== 'string') {
        alert('Не строка');
    } else {
        let strCut = str.trim();
        if (strCut.length > 30) {
            strCut = strCut.substring(0, 30) + '...';
            return strCut;
        } else {
            return strCut;
        }
    };
};

alert(myfunc(arr));
alert(myfunc(letters));

