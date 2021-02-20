var arr = [10, 343445353, 3453445, 3453545353453];
var arr1 = [45, 10, 69, 4521, -1, , 12, , -5, 2548, 56, 9];

function sumTwoSmall(Array) {
    let arr = Array.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

console.log(sumTwoSmall(arr));
console.log(sumTwoSmall(arr1));