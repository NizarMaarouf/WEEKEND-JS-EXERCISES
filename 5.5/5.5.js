var str = "Nizar Maarouf";
var str1 = "Sam Harris";
var str2 = "Patrick Feeney";


function intoInitials(str) {
    var res = str.split(" ");
    //console.log(res);
    for (let i = 0; i < res.length; i++) {
        for (let k = 0; k < res[i].length; k++) {
            let firstLetterFirstName = res[0].charAt(0).toUpperCase();
            let firstLetterLastName = res[res.length - 1].charAt(0).toUpperCase();
            return firstLetterFirstName + '.' + firstLetterLastName;
        }
    }
}


console.log(intoInitials(str));
console.log(intoInitials(str1));
console.log(intoInitials(str2));