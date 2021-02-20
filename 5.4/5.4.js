var str = "How are you doing today?";
var str1 = "String";

function myFunction(str) {
    var res = str.split(" ");
    // console.log(res);
    var newarr = [];
    for (let i = 0; i < res.length; i++) {
        let newstr = "";
        for (let k = 0; k < res[i].length; k++) {
            if (k % 2 === 0) {
                newstr += res[i].charAt(k).toUpperCase();
            } else {
                newstr += res[i].charAt(k).toLowerCase();
            }
        }
        newarr.push(newstr);
    }
    return newarr.join(' ');
}
console.log(myFunction(str));
console.log(myFunction(str1));