function bool_to_word(bool) {
    if (bool === true) {
        return "Yes";
    } else
        return "No";
}

console.log(bool_to_word(5 === 5));
console.log(bool_to_word(5 === 6));
console.log(bool_to_word(5 > 5));
console.log(bool_to_word(5 >= 5));
console.log(bool_to_word(6 > 5));
console.log(bool_to_word(4 < 6));