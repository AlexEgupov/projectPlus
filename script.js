'use strict';

let arr = [11, 22, 33, 44, 55, 66, 77];

for (let i = 0; i < arr.length; i++) {
    if (20 <= arr[i] && arr[i] <= 29) {
        console.log(arr[i]);
    } else if (40 <= arr[i] && arr[i] <= 49) {
        console.log(arr[i]);
    }
};

nextPrime:
for (let i = 2; i < 100; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    console.log(i + ' Делители этого числа: 1 и ' + i);
};