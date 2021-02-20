var str = "abcd";
var str1 = "RqaEzty";
var str2 = "cwAt";
var str3 = "NizAr";

function accum(arr) {
    let Array = [];
    let lowerCaseStr = arr.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        let str = lowerCaseStr[i].toUpperCase();
        for (let k = 0; k < i; k++) {
            str += lowerCaseStr[i];
        }
        Array.push(str);
    }
    return Array.join(" ");
}
console.log(accum(str));
console.log(accum(str1));
console.log(accum(str2));
console.log(accum(str3));