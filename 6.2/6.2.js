var str1 = "Indivisibilities";
var str2 = "abcde";
var str3 = "aabbcde";
var str4 = "aabBcde";
var str5 = "Indivisibility";
//var count = {};
//var uniqueCount = str1.split('');
//uniqueCount.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
//console.log(count);
function duplicated(text) {

    let lowerArr = text.toLowerCase().split("");
    let found = [];
    let counter = 0;

    for (let i = 0; i < lowerArr.length; i++) {
        let sliced = lowerArr.slice(0, i);
        if (found.includes(lowerArr[i])) {
            i++;
            continue;
        } else if (sliced.includes(lowerArr[i])) {
            found.push(lowerArr[i]);
            counter++;
        }
    }
    if (counter === 0) {
        console.log("No characters repeats more than once");
    }
    return counter;
}


console.log(duplicated(str1));
duplicated(str2);
console.log(duplicated(str3));
console.log(duplicated(str4));
console.log(duplicated(str5));