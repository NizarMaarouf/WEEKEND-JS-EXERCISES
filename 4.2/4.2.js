function fibonacci(n) {
    if (n === 0 || n === 1) {
        return [1, 1, 1];
    }
    var arr = fibonacci(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]);
    return arr;


}
console.log(fibonacci(10));