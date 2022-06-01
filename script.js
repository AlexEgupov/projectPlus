'use strict';

//Объявление переменных
const question = confirm('Знаете ли вы английский?')
let lang = question === true ? 'en' : 'ru';

//Вывод через массив
let map = new Map();

map.set('en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    .set('ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);

alert(map.get(lang));

//Вывод через if
if (lang === 'en') {
    alert(map.get(lang));
} else {
    alert(map.get(lang));
}

//Вывод через switch
switch (lang) {
    case 'en':
        alert(map.get(lang));
        break;
    case 'ru':
        alert(map.get(lang));
        break;
    default:
        console.log('Что то сломалось');
        break;
}

//Задача с namePerson
const namePerson = prompt('Введите свое имя', 'Артем').toLowerCase();

namePerson === 'артем' || namePerson === 'артём' ? console.log('директор')
    : namePerson === 'александр' ? console.log('преподаватель') : console.log('студент');
