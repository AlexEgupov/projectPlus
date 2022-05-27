const num = 266219;
const numArr = num.toString().split('');
let sumArr = numArr[0];

for (let i = 1; i < numArr.length; ++i) {
    sumArr *= numArr[i];
}

console.log(sumArr);

let degree = sumArr ** 3;
let degreeCut = degree.toString().substring(0, 2);

console.log(degreeCut);
