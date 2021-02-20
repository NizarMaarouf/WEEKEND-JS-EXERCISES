function basicOp(str, number1, number2) {
    switch (str) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return (number1 / number2).toFixed(4);
        default:
            return ('You enter a rong string');
    }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 4, 7));
console.log(basicOp('/', 4, 7));
console.log(basicOp('*', 4, 7));
console.log(basicOp('.', 4, 7));