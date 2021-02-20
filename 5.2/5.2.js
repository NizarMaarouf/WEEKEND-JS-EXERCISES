function repeatStr(n, str) {
    for (i = 0; i < n; i++) {
        if (n === 1) {
            return str;
        }

        return (str.repeat(n)).toString();

    }

}

console.log(repeatStr(3, "b\t"));
console.log(repeatStr(1, 'b\t'));
console.log(repeatStr(6, '|\t'));
console.log(repeatStr(8, 'n\t'));