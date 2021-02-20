var numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);



var newItems = [];
for (let i = 0; i < numbers.length; i++) {
    newItems.push(numbers[i] * 2);
}
console.log(newItems);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter(function(item) {
    return item > 3;
});

console.log(result);

var newItems = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        newItems.push(arr[i]);
    }
}
console.log(newItems);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

let array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


function ff(arr) {
    var newarr = [];

    for (let i = 0; i < arr.length; i++) {
        newarr += arr[i];

    }
    newarr = arr.join('\n');
    console.log(newarr);
}
ff(array1);