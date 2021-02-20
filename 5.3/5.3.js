let str1 = "The_Stealth_Warrior";
let str2 = "the-stealth-warrior";


function toCamelCase(str) {
    return str.replace(/(?:(-.)|(_.)|(\s.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });
}

console.log(toCamelCase(str1));
console.log(toCamelCase(str2));