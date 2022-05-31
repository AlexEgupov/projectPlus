'use strict';

let arr = [];
let letters = prompt('Введите больше или меньше 30 символов', 'Надо дописать еще немного');

function myfunc(str) {
    if (typeof str !== 'string') {
        return 'Не строка';
    } else {
        let strCut = str.trim();
        if (strCut.length > 30) {
            strCut = strCut.substring(0, 30) + '...';
            return strCut;
        } else {
            return 'Попробуйте ввести больше символов';
        }
    };
};


alert(myfunc(letters));
console.log(myfunc(arr));