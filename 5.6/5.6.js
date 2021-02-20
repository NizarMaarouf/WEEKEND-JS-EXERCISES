var str = "Nizar Maarouf";
var str1 = "4556364607935616";
var str2 = "64607935616";
var str3 = "   1";
var str4 = "  ''";
var str5 = "Nananananananananananananananana Batman!";


function mask(str) {
    var string = "";
    for (var i = 1; i <= str.length - 4; i++) {
        string += "#";
    }
    let exitstr = string + str.substr(str.length - 4);
    return exitstr;
}

console.log(mask(str));
console.log(mask(str1));
console.log(mask(str2));
console.log(mask(str3));
console.log(mask(str4));
console.log(mask(str5));