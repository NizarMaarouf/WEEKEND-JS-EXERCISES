var Testing1 = [0, 0, 0, 1];
var Testing2 = [0, 0, 1, 0];
var Testing3 = [0, 1, 0, 1];
var Testing4 = [1, 0, 0, 1];
var Testing5 = [0, 0, 1, 0];
var Testing6 = [0, 1, 1, 0];
var Testing7 = [1, 1, 1, 1];
var Testing8 = [1, 0, 1, 1];
var Testing9 = [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1];

const binTodec = arr => {
    let len = arr.length;
    let pow = [];
    let decimal = [];
    for (let i = 0; i <= len - 1; i++) {
        pow.unshift(i);
    }
    arr.forEach((x, index) => {
        decimal.push(x * 2 ** pow[index]);
    });
    let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0);
    return toDecimal;
};

console.log(binTodec(Testing1));
console.log(binTodec(Testing2));
console.log(binTodec(Testing3));
console.log(binTodec(Testing4));
console.log(binTodec(Testing5));
console.log(binTodec(Testing6));
console.log(binTodec(Testing7));
console.log(binTodec(Testing8));
console.log(binTodec(Testing9));