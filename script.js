'use strict';

let arr = ['222', '22', '2', '4444', '524', '64', '72'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

nextPrime:
for (let i = 2; i < 100; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    console.log(i + ' Делители этого числа: 1 и ' + i);
};