let arr = [1, 25, 14, 3, 6, 9, 8, 4];
let arr1 = [25, 14];

function firstLast(array) {

    if (array.length - 1 <= 2) {
        return 'The array is too small';
    }

    return array.splice(1, array.length - 2);
}
console.log(firstLast(arr));
console.log(firstLast(arr1));