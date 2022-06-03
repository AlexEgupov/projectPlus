'use strict';

const date = new Date();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let str = ' ';
let ital = ' ';
let today = ' ';

week.forEach(function (item) {
    str += item + '<br>';
});

week.forEach(function (item) {
    ital += ' ' + `<i>${item}</i>` + ' ' + '<br>';
});

week.forEach(function (item, index) {
    if (date.getDay() == index + 1) {
        today += ' ' + `<b>${item}</b>` + ' ' + '<br>';
    } else { today += item + '<br>' }
});

raw.innerHTML = week;
column.innerHTML = str;
italic.innerHTML = ital;
todayBold.innerHTML = today;
