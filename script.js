'use strict';

//Объявление переменных
const question = confirm('Знаете ли вы английский?')
let lang = question === true ? 'en' : 'ru';
const daysArr = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];

//Вывод через if
if (lang === 'en') {
    alert(daysArr[0]);
} else {
    alert(daysArr[1]);
}

//Вывод через switch
switch (lang) {
    case 'en':
        alert(daysArr[0]);
        break;
    case 'ru':
        alert(daysArr[1]);
        break;
    default:
        console.log('Что то сломалось');
        break;
}

//Вывод через массив
lang === 'en' ? alert(daysArr[0]) : alert(daysArr[1]);

//Задача с namePerson
const namePerson = prompt('Введите свое имя', 'Артем').toLowerCase();

namePerson === 'артем' || namePerson === 'артём' ? console.log('директор')
    : namePerson === 'александр' ? console.log('преподаватель') : console.log('студент');
