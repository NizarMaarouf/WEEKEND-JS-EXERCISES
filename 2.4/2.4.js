var arr = [1, 1, 1, 2, 1, 1];
var arr1 = [0, 0, 0.55, 0, 0];

function isUniq(Array) {
    for (i = 0; i < arr.length; i++) {
        if (Array[i + 1] - Array[i] !== 0) {
            return Array[i + 1];
        }
    }
}

console.log(isUniq(arr));
console.log(isUniq(arr1));