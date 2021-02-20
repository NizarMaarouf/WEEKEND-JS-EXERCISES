function sumMation(n) {
    if (n === 0) {
        return n;
    }
    return n + sumMation(n - 1);

}
console.log(sumMation(5));
console.log(sumMation(2));
console.log(sumMation(8));