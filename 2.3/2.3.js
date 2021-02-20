function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1;
    }
    return Math.pow(Math.sqrt(sq) + 1, 2);

}


console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(81));